import { z } from "zod";

// .env で管理する環境変数のスキーマ定義
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().url(),
  COSMOS_DB_ENDPOINT: z.string().url(),
  COSMOS_DB_KEY: z.string(),
  AZURE_BLOB_CONNECTION_STRING: z.string(),
  AZURE_BLOB_CONTAINER_NAME: z.string().default("uploads"),
  AZURE_OPENAI_RESOURCE_NAME: z.string(),
  AZURE_OPENAI_RESOURCE_API_KEY: z.string(),
  AZURE_OPENAI_API_VERSION: z.string(),
  AZURE_OPENAI_DEPLOYMENT_NAME: z.string(),
  AZURE_SPEECH_KEY: z.string(),
  AZURE_SPEECH_REGION: z.string(),
});

// 環境変数の一括読み込み＆バリデーション
const _env = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  COSMOS_DB_ENDPOINT: process.env.COSMOS_DB_ENDPOINT,
  COSMOS_DB_KEY: process.env.COSMOS_DB_KEY,
  AZURE_BLOB_CONNECTION_STRING: process.env.AZURE_BLOB_CONNECTION_STRING,
  AZURE_BLOB_CONTAINER_NAME: process.env.AZURE_BLOB_CONTAINER_NAME || "uploads",
  AZURE_OPENAI_RESOURCE_NAME: process.env.AZURE_OPENAI_RESOURCE_NAME,
  AZURE_OPENAI_RESOURCE_API_KEY: process.env.AZURE_OPENAI_RESOURCE_API_KEY,
  AZURE_OPENAI_API_VERSION: process.env.AZURE_OPENAI_API_VERSION,
  AZURE_OPENAI_DEPLOYMENT_NAME: process.env.AZURE_OPENAI_DEPLOYMENT_NAME,
  AZURE_SPEECH_KEY: process.env.AZURE_SPEECH_KEY,
  AZURE_SPEECH_REGION: process.env.AZURE_SPEECH_REGION,
};

export const env = envSchema.parse(_env);
