import { azure } from "@/lib/ai/plugins/providers";
import { withApiHandler } from "@/lib/api-wrapper";
import { env } from "@/lib/config";
import { logger } from "@/lib/logger";
import { Agent } from "@mastra/core/agent";
import type { NextRequest } from "next/server";

export const POST = withApiHandler(async (req: NextRequest) => {
  const prompt = "Your helpful Assistant";
  const body = await req.json();
  logger.debug("Request body:", body);

  const agent = new Agent({
    name: "User Support Agent",
    instructions: "You are a helpful assistant that provides product recommendations.",
    model: azure(env.AZURE_OPENAI_DEPLOYMENT_NAME),
  });

  const result = await agent.generate(prompt);

  return { text: result.text, products: { imageUrl: "/placeholder.svg?width=100&height=100&query=product" } };
});
