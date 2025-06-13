import { env } from "@/lib/config";
import { createAzure } from "@ai-sdk/azure";

export const azure = createAzure({
  resourceName: env.AZURE_OPENAI_RESOURCE_NAME,
  apiKey: env.AZURE_OPENAI_RESOURCE_API_KEY,
  apiVersion: env.AZURE_OPENAI_API_VERSION,
});
