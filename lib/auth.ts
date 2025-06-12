import { logger } from "@/lib/logger";
import jwt from "jsonwebtoken";

export interface EasyAuthUser {
  id: string;
  email: string;
  name: string;
  groups: string[];
  provider: string;
}

// Azure App Serviceの各認証プロバイダーのヘッダー
const AUTH_HEADERS = {
  AAD: ["X-MS-TOKEN-AAD-ID-TOKEN", "X-MS-CLIENT-PRINCIPAL"], // X-MS-CLIENT-PRINCIPALを追加して後方互換性を保持
  FACEBOOK: ["X-MS-TOKEN-FACEBOOK-ACCESS-TOKEN"],
  GOOGLE: ["X-MS-TOKEN-GOOGLE-ID-TOKEN"],
  TWITTER: ["X-MS-TOKEN-TWITTER-ACCESS-TOKEN"],
};

// 開発環境かどうかを判定する定数
const isDevelopment = process.env.NODE_ENV === "development";

const dummy_no_group = {
  aud: "00000000-0000-0000-0000-000000000000",
  iss: "https://example.b2clogin.com/example/v2.0",
  iat: 1700000000,
  nbf: 1700000000,
  exp: 1700010000,
  aio: "DUMMY_AIO_TOKEN",
  email: "user@example.com",
  name: "Test User",
  nonce: "00000000000000000000000000000000_20250101000000",
  oid: "00000000-0000-0000-0000-000000000000",
  preferred_username: "user@example.com",
  rh: "DUMMY_RH_TOKEN",
  sid: "00000000-0000-0000-0000-000000000000",
  sub: "DUMMY_SUB_VALUE",
  tid: "00000000-0000-0000-0000-000000000000",
  uti: "DUMMY_UTI_VALUE",
  ver: "2.0",
  wids: ["00000000-0000-0000-0000-000000000000"],
};

const dummy_with_group = {
  ...dummy_no_group,
  groups: ["00000000-0000-0000-0000-000000000001", "00000000-0000-0000-0000-000000000002"],
};

/**
 * 複数の認証プロバイダーに対応するためのヘルパー関数
 * リクエストヘッダーから認証情報を取得する
 */
export function getAuthToken(headers: Headers): { token: string; provider: string } | null {
  // すべての認証プロバイダーをチェック
  for (const [provider, headerNames] of Object.entries(AUTH_HEADERS)) {
    for (const headerName of headerNames) {
      const token = headers.get(headerName);
      if (token) {
        return { token, provider };
      }
    }
  }
  return null;
}

/**
 * 認証ヘッダーからユーザー情報を抽出する
 * @param headers Headersオブジェクト
 * @returns ユーザー情報またはnull
 */
export function parseEasyAuthHeader(headers: Headers): EasyAuthUser | null {
  // 開発モードの場合はダミーユーザーを返す
  if (isDevelopment) {
    return {
      id: dummy_with_group.oid,
      email: dummy_with_group.email,
      name: dummy_with_group.name,
      groups: dummy_with_group.groups,
      provider: "AAD",
    };
  }

  try {
    const tokenInfo = getAuthToken(headers);

    if (!tokenInfo) {
      logger.warn("No authentication token found in headers");
      return null;
    }

    const { token, provider } = tokenInfo;
    if (!token || typeof token !== "string" || !token.includes(".")) {
      logger.warn(`Invalid token format from provider: ${provider}`);
      return null;
    }

    // Azure App Serivce 側で既に検証されている為、ここではデコードのみを行う
    const decodedToken = jwt.decode(token) as any;
    logger.debug(`Decoded token from provider ${provider}:`, {
      provider,
      tokenSnippet: `${token.slice(0, 10)}...`, // Log only the first 10 characters of the token
    });
    if (!decodedToken) {
      logger.warn(`Failed to decode token from provider: ${provider}`);
      return null;
    }

    // 必須フィールドの存在チェック
    const userId = decodedToken.sub || decodedToken.oid || decodedToken.user_id || decodedToken.id;
    if (!userId) {
      logger.warn("Token does not contain user identifier");
      return null;
    }

    const user: EasyAuthUser = {
      id: userId,
      email: decodedToken.email || decodedToken.preferred_username || decodedToken.unique_name || "",
      name: decodedToken.name || decodedToken.given_name || "",
      groups: decodedToken.groups || [],
      provider,
    };

    return user;
  } catch (error) {
    // より詳細なエラーログ
    logger.error(error, "Failed to parse EasyAuth header");
    return null;
  }
}
