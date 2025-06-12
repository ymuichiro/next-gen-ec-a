import { DefaultAzureCredential } from "@azure/identity";

// グローバルでcredentialをキャッシュ
const credential = new DefaultAzureCredential();

/**
 * ホームテナントでの Managed Identity によるアクセストークンの取得。
 * 環境変数 AZURE_CLIENT_ID が設定されている場合は、指定されたクライアントIDの Managed Identity を使用します。
 * App Service で Managed Identity を有効にしている場合は自動的に指定されます。
 *
 * @param scope 例: "https://dynamicsessions.io/.default"
 * @returns アクセストークン文字列
 */
export async function getManagedIdentityAccessToken(scope: string): Promise<string> {
  const tokenResponse = await credential.getToken(scope);
  if (!tokenResponse || !tokenResponse.token) {
    throw new Error("Failed to acquire access token");
  }
  return tokenResponse.token;
}
