import { azure } from "@/lib/ai/plugins/providers";
import { withApiHandler } from "@/lib/api-wrapper";
import { env } from "@/lib/config";
import { logger } from "@/lib/logger";
import type { ChatContent, ChatMessageModel } from "@/lib/types";
import { Agent } from "@mastra/core";
import { MCPClient } from "@mastra/mcp";
import type { NextRequest } from "next/server";

const mcp = new MCPClient({ servers: {} });

export const POST = withApiHandler(async (req: NextRequest) => {
  const body = await req.json();
  logger.debug(`Request body received: ${JSON.stringify(body)}`);

  const messages: ChatMessageModel[] = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid messages format");
  }

  // ChatMessageModel を Mastra 向けの形式に変換
  const mastraMessages = messages.map((m) => ({
    role: m.sender,
    content: m.content.map((c: ChatContent) =>
      c.type === "text"
        ? { type: "text", text: c.text }
        : { type: "image", image: new URL(c.imageUrl), mimeType: c.mimeType }
    ),
  }));

  if (mastraMessages.length === 0 || mastraMessages[mastraMessages.length - 1].role !== "user") {
    throw new Error("Last message must be from the user");
  }

  const agent = new Agent({
    name: "User Support Agent",
    instructions: "You are a helpful assistant that provides product recommendations.",
    model: azure(env.AZURE_OPENAI_DEPLOYMENT_NAME),
    tools: await mcp.getTools(),
  });

  const result = await agent.generate(mastraMessages as any);
  return {
    text: result.text,
    products: { imageUrl: "/placeholder.svg?width=100&height=100&query=product" },
  };
});
