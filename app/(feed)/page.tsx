import { ProductFeed } from "@/components/ecommerce-ai/product-feed"
import { ChatInterface } from "@/components/ecommerce-ai/chat-interface"

export default function SocialCommercePage() {
  return (
    // Removed main tag from here, as it's now in layout.tsx
    // Adjusted padding to p-0 as layout's main tag will handle global padding if needed,
    // and header adds pt-16. The flex container itself doesn't need more padding.
    <div className="flex h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] overflow-hidden p-4 gap-4">
      {/* The height calculation accounts for the 4rem (h-16) header */}
      <div className="w-1/3 max-w-md h-full">
        <ChatInterface />
      </div>
      <div className="w-2/3 h-full overflow-y-auto rounded-lg">
        <ProductFeed />
      </div>
    </div>
  )
}
