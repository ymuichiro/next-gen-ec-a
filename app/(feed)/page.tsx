import { ChatInterface } from "@/components/ecommerce-ai/chat-interface";
import { MobileChatFAB } from "@/components/ecommerce-ai/mobile-chat-fab";
import { ProductFeed } from "@/components/ecommerce-ai/product-feed";

export default function SocialCommercePage() {
  return (
    <>
      {/* デスクトップレイアウト */}
      <div className="hidden lg:flex h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] overflow-hidden p-4 gap-4">
        {/* チャットインターフェース */}
        <div className="w-1/3 max-w-md h-full">
          <ChatInterface />
        </div>

        {/* 商品フィード */}
        <div className="w-2/3 h-full overflow-y-auto rounded-lg">
          <ProductFeed />
        </div>
      </div>

      {/* モバイルレイアウト */}
      <div className="lg:hidden h-[calc(100vh-3.5rem)] overflow-hidden">
        {/* 商品フィードのみ表示 */}
        <div className="w-full h-full overflow-y-auto px-2 sm:px-2">
          <ProductFeed />
        </div>

        {/* モバイル用チャットFAB */}
        <MobileChatFAB />
      </div>
    </>
  );
}
