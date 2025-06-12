import { BlobSASPermissions, BlobServiceClient } from "@azure/storage-blob";
import { env } from "./config";

const connectionString = env.AZURE_BLOB_CONNECTION_STRING;
const containerName = env.AZURE_BLOB_CONTAINER_NAME;

export class StorageService {
  private containerClient;

  constructor() {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    this.containerClient = blobServiceClient.getContainerClient(containerName);
  }

  /**
   * コンテナが存在しなければ作成する
   */
  public async ensureContainerExists() {
    const exists = await this.containerClient.exists();
    if (!exists) {
      await this.containerClient.create();
    }
  }

  /**
   * ファイル名の安全化: ディレクトリトラバーサル・特殊文字除去・長さ制限
   */
  public validateFileName(filename: string): { baseName: string; ext: string } {
    const baseName = filename.replace(/^.*[\\\/]/, "").slice(0, 128);
    const ext = baseName.split(".").pop()?.toLowerCase() || "";
    return { baseName, ext };
  }

  /**
   * 現在日付をYYYYMMDD形式で返す
   */
  public getTodayYMD(): string {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}`;
  }

  /**
   * 指定されたblob名からSASトークン付きURLを発行する
   * @param blobName 対象のblob名（例: users/xxx/yyy/filename）
   * @param expiresInSeconds 有効期限（秒）デフォルト1時間
   * @returns SASトークン付きURL（write権限）
   */
  async generateSasUrl(
    blobName: string,
    expiresInSeconds = 3600,
    permissions: BlobSASPermissions = BlobSASPermissions.from({ read: true })
  ) {
    return await this.containerClient.getBlockBlobClient(blobName).generateSasUrl({
      permissions,
      expiresOn: new Date(Date.now() + expiresInSeconds * 1000),
    });
  }
}
