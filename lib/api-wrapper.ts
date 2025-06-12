import { type EasyAuthUser, parseEasyAuthHeader } from "@/lib/auth";
import { logAccess, logger } from "@/lib/logger";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export type User = EasyAuthUser | null;

export type ApiHandler<T = unknown> = (req: NextRequest, user: User) => Promise<T>;

/**
 * カスタムエラー型定義
 */
export interface ApiError extends Error {
  status?: number;
}

/**
 * API リクエストを処理するための高階関数
 * 認証、エラーハンドリング、ログ記録を共通化する
 *
 * @param handler API処理を行うハンドラー関数
 * @param requireAuth 認証が必要かどうか（デフォルトはtrue）
 * @returns API リクエストを処理する関数
 */
export function withApiHandler<T>(handler: ApiHandler<T>, requireAuth = true) {
  return async (req: NextRequest) => {
    const headersList = await headers();
    const user = parseEasyAuthHeader(headersList);
    let resp: NextResponse;

    try {
      // 認証チェック（requireAuth が true の場合）
      if (requireAuth && (!user || !user.id)) {
        resp = NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        await logAccess(req, resp, user);
        return resp;
      }

      // ハンドラー関数の実行
      const result = await handler(req, user);

      // 成功レスポンスの生成
      resp = NextResponse.json(result);
      await logAccess(req, resp, user);
      return resp;
    } catch (error: unknown) {
      // エラーメッセージのカスタマイズ
      const errorMessage = (error as Error).message || "Internal Server Error";
      const statusCode = (error as ApiError).status || 500;

      // エラーログ記録
      logger.error(error, `Error in ${req.method} ${new URL(req.url).pathname}`);

      // エラーレスポンスの生成
      resp = NextResponse.json({ error: errorMessage }, { status: statusCode });
      await logAccess(req, resp, user);
      return resp;
    }
  };
}

/**
 * エラーを生成するユーティリティ関数
 */
export function createApiError(message: string, status: number): ApiError {
  return Object.assign(new Error(message), { status });
}
