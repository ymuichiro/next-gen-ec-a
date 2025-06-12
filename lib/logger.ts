import type { EasyAuthUser } from "@/lib/auth";
import { env } from "@/lib/config";
import { headers } from "next/headers";
import { pino } from "pino";

export const logger = pino({
  level: process.env.NODE_ENV !== "production" ? "debug" : "info",
});

export async function logAccess(request: Request, responseInit: ResponseInit, user?: EasyAuthUser | null) {
  if (env.NODE_ENV !== "production") {
    return;
  }
  const headerList = await headers(); // headers() は Promise を返すため await を追加
  const forwardedFor = headerList.get("x-forwarded-for");
  const realIp = headerList.get("x-real-ip");

  let ipAddress = "unknown";
  if (forwardedFor) {
    ipAddress = forwardedFor.split(",")[0].trim();
  } else if (realIp) {
    ipAddress = realIp.trim();
  }

  const url = new URL(request.url);

  logger.info(
    {
      userId: user?.id,
      userEmail: user?.email,
      ipAddress,
      method: request.method,
      path: url.pathname,
      userAgent: request.headers.get("user-agent"),
      statusCode: responseInit.status,
      queryParams: url.searchParams.toString(),
    },
    "Access log"
  );
}

/**
 * SSR 環境向けアクセスログ関数
 * @param path アクセスされたパス
 * @param user ユーザー情報
 * @param headersList ヘッダー情報 (Next.js の headers())
 * @param extra 追加で記録したい情報（任意）
 */
export function logAccessForSSR({
  path,
  user,
  headersList,
  extra = {},
}: {
  path: string;
  user?: EasyAuthUser | null;
  headersList: Headers;
  extra?: Record<string, unknown>;
}) {
  if (env.NODE_ENV !== "production") {
    return;
  }
  const forwardedFor = headersList.get("x-forwarded-for");
  const realIp = headersList.get("x-real-ip");
  let ipAddress = "unknown";
  if (forwardedFor) {
    ipAddress = forwardedFor.split(",")[0].trim();
  } else if (realIp) {
    ipAddress = realIp.trim();
  }
  logger.info(
    {
      userId: user?.id,
      userEmail: user?.email,
      ipAddress,
      path,
      userAgent: headersList.get("user-agent"),
      ...extra,
    },
    "SSR Access log"
  );
}
