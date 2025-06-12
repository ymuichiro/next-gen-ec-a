import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    console.error("OpenAI API key is not configured.");
    return NextResponse.json(
      { error: "AIサービスが設定されていません。APIキーが見つかりません。" },
      { status: 503 } // Service Unavailable
    );
  }

  try {
    const { productDescription, productName } = await req.json();

    if (!productDescription || !productName) {
      return NextResponse.json({ error: "製品名と説明は必須です" }, { status: 400 });
    }

    const prompt = `
      Given the product named "${productName}" with the description "${productDescription}", 
      suggest 3 similar products. 
      For each product, provide a name, a brief (1-2 sentence) description, and an optional placeholder image query (e.g., "blue running shoes").
      Format your response as a VALID JSON array of objects. Each object should have the following keys: "name" (string), "description" (string), and "imageQuery" (string, optional).
      Example of a single object in the array:
      {
        "name": "Example Similar Product",
        "description": "This is a great alternative with similar features.",
        "imageQuery": "example product image"
      }
      Ensure the entire output is only the JSON array.
    `;

    const { text: similarProductsText } = await generateText({
      model: openai("gpt-4o"),
      prompt: prompt,
    });

    try {
      let parsedSimilarProducts = JSON.parse(similarProductsText);
      parsedSimilarProducts = parsedSimilarProducts.map((p: any) => ({
        ...p,
        imageUrl: p.imageQuery
          ? `/placeholder.svg?width=100&height=100&query=${encodeURIComponent(p.imageQuery)}`
          : "/placeholder.svg?width=100&height=100&query=product",
      }));
      return NextResponse.json({ similarProducts: parsedSimilarProducts });
    } catch (parseError) {
      console.error("AIレスポンスのJSONパースエラー:", parseError);
      console.error("生のAIレスポンス:", similarProductsText);
      return NextResponse.json(
        {
          error: "AIレスポンスから類似製品をパースできませんでした。AIが有効なJSONを返さなかった可能性があります。",
          rawResponse: similarProductsText,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("find-similar APIでのエラー:", error);
    if (error.name === "OpenAIError") {
      return NextResponse.json({ error: `OpenAI APIエラー: ${error.message}` }, { status: 500 });
    }
    return NextResponse.json({ error: "内部サーバーエラーにより類似製品を取得できませんでした。" }, { status: 500 });
  }
}
