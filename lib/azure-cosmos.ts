import { CosmosClient } from '@azure/cosmos';
import { env } from './config';

// Cosmos DB クライアントの初期化
export const cosmosClient = new CosmosClient({
  endpoint: env.COSMOS_DB_ENDPOINT,
  key: env.COSMOS_DB_KEY,
});

// 必要に応じてDB/コンテナ取得のヘルパーも追加可能
