import { createApiError, withApiHandler } from "@/lib/api-wrapper";
import { StorageService } from "@/lib/storage";
import { BlobSASPermissions } from "@azure/storage-blob";
import type { NextRequest } from "next/server";

export const POST = withApiHandler(async (request: NextRequest, user) => {
  if (!user || !user.id) {
    throw createApiError("Unauthorized", 401);
  }

  const { fileName } = await request.json();
  if (!fileName) {
    throw createApiError("fileName is required", 400);
  }

  const storage = new StorageService();
  const safe = storage.validateFileName(fileName);
  const encodedBase = Buffer.from(safe.baseName).toString("base64url");
  const blobName = safe.ext
    ? `users/${user.id}/${storage.getTodayYMD()}/${encodedBase}.${safe.ext}`
    : `users/${user.id}/${storage.getTodayYMD()}/${encodedBase}`;
  const url = await storage.generateSasUrl(
    blobName,
    600,
    BlobSASPermissions.from({ read: true, write: true, create: true })
  ); // 10分有効
  return { url };
});
