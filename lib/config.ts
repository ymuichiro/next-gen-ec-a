import { z } from "zod";

// .env で管理する環境変数のスキーマ定義
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().url(),
  COSMOS_DB_ENDPOINT: z.string().url(),
  COSMOS_DB_KEY: z.string(),
  AZURE_BLOB_CONNECTION_STRING: z.string(),
});

// 環境変数の一括読み込み＆バリデーション
const _env = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  COSMOS_DB_ENDPOINT: process.env.COSMOS_DB_ENDPOINT,
  COSMOS_DB_KEY: process.env.COSMOS_DB_KEY,
  AZURE_BLOB_CONNECTION_STRING: process.env.AZURE_BLOB_CONNECTION_STRING,
};

export const env = envSchema.parse(_env);
