import { createApiError, withApiHandler } from "@/lib/api-wrapper";
import { env } from "@/lib/config";
import { logger } from "@/lib/logger";
import type { NextRequest } from "next/server";

const MAX_AUDIO_SIZE: number = 10 * 1024 * 1024;
const STT_API_VERSION: string = "2024-11-15";

export const POST = withApiHandler(async (request: NextRequest, user) => {
  if (!user) {
    throw createApiError("Unauthorized", 401);
  }
  const audioBuffer: ArrayBuffer = await request.arrayBuffer();
  if (audioBuffer.byteLength > MAX_AUDIO_SIZE) {
    logger.error("[STT] Audio file too large");
    throw createApiError("Audio file too large", 413);
  }
  const key: string | undefined = env.AZURE_SPEECH_KEY;
  const region: string | undefined = env.AZURE_SPEECH_REGION;
  if (!key || !region) {
    logger.error("[STT] Missing Azure Speech key or region");
    throw createApiError("Azure Speech key or region is not set", 500);
  }
  const endpoint: URL = new URL(
    "/speechtotext/transcriptions:transcribe",
    `https://${region}.api.cognitive.microsoft.com`
  );
  endpoint.searchParams.set("api-version", STT_API_VERSION);

  // ロケールはja-JPで固定
  const locale = "ja-JP";
  const formData: FormData = new FormData();
  formData.append("audio", new Blob([audioBuffer], { type: "audio/wav" }), "audio.wav");
  formData.append("definition", JSON.stringify({ locales: [locale] }));

  const res: Response = await fetch(endpoint.toString(), {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": key,
    },
    body: formData as any,
  });

  if (!res.ok) {
    const errorText = await res.text();
    logger.error(new Error(errorText), "[STT] Azure error");
    throw createApiError("Azure Speech API error", 500);
  }

  const payload: any = await res.json();
  const transcript: string = payload.combinedPhrases?.map((p: any) => p.text).join(" ") || "";
  return { transcript };
});
