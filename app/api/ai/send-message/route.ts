import { parseEasyAuthHeader } from "@/lib/auth";
import { logAccess, logger } from "@/lib/logger";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const user = parseEasyAuthHeader(request.headers);
  if (!user || !user.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  logAccess("POST /api/ai/send-message", user);

  try {
    const { text, imageUrl, timestamp } = await request.json();
    // ここでDB保存やAI連携などの処理を実装（現状は受信内容をそのまま返す）
    return Response.json({ ok: true, text, imageUrl, timestamp });
  } catch (error) {
    logger.error(error, "send-message APIでのエラー");
    return new Response("Internal Server Error", { status: 500 });
  }
}
