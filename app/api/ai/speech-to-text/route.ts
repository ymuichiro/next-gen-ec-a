import { createApiError, withApiHandler } from "@/lib/api-wrapper";
import { env } from "@/lib/config";
import { logger } from "@/lib/logger";
import type { NextRequest } from "next/server";

// Azure Speech REST APIエンドポイント
const SPEECH_ENDPOINT = `https://${env.AZURE_SPEECH_REGION}.api.cognitive.microsoft.com/speechtotext/v3.0/transcriptions`;

export const POST = withApiHandler(async (req: NextRequest) => {
  const { blobUrl, fileName } = await req.json();
  if (!blobUrl) {
    throw createApiError("blobUrl is required", 400);
  }

  // Azure Speech API でバッチ音声認識ジョブ作成
  const transcriptionReq = await fetch(SPEECH_ENDPOINT, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": env.AZURE_SPEECH_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contentUrls: [blobUrl],
      locale: "ja-JP",
      displayName: fileName || `voice-${Date.now()}`,
      properties: { diarizationEnabled: false },
    }),
  });
  if (!transcriptionReq.ok) {
    logger.error(await transcriptionReq.text(), "Failed to create speech transcription job");
    throw createApiError("Failed to create speech transcription job", 500);
  }
  // LocationヘッダーからジョブURL取得
  const jobUrl = transcriptionReq.headers.get("location");
  if (!jobUrl) {
    throw createApiError("No job location returned", 500);
  }

  // ジョブ完了までポーリング
  let status = "";
  let resultUrls: string[] = [];
  for (let i = 0; i < 30; i++) {
    // 最大30回(約60秒)
    await new Promise((r) => setTimeout(r, 2000));
    const statusRes = await fetch(jobUrl, {
      headers: { "Ocp-Apim-Subscription-Key": env.AZURE_SPEECH_KEY },
    });
    const statusJson = await statusRes.json();
    status = statusJson.status;
    if (status === "Succeeded") {
      resultUrls = statusJson.resultsUrls?.transcriptionFiles ? [statusJson.resultsUrls.transcriptionFiles] : [];
      break;
    }
    if (status === "Failed") {
      logger.error(statusJson, "Speech transcription job failed");
      throw createApiError("Speech transcription job failed", 500);
    }
  }
  if (status !== "Succeeded" || resultUrls.length === 0) {
    throw createApiError("Speech transcription did not complete in time", 504);
  }

  // 結果ファイル(JSON)を取得しテキスト抽出
  const resultRes = await fetch(resultUrls[0]);
  const resultJson = await resultRes.json();
  const text = resultJson.values?.[0]?.combinedRecognizedPhrases?.[0]?.display ?? "";
  return { text };
});
