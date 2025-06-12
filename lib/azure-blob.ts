import { BlobServiceClient } from "@azure/storage-blob";
import { env } from "./config";

export const blobServiceClient = BlobServiceClient.fromConnectionString(env.AZURE_BLOB_CONNECTION_STRING);
