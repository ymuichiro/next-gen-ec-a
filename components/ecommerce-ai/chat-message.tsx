import type { Product } from "@/lib/types"
import Image from "next/image"
import { User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  sender: "user" | "ai"
  text: string
  products?: Product[] // Optional: for AI product suggestions
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

function ProductSuggestionCard({ product }: { product: Product }) {
  return (
    <div className="mt-2 p-3 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
      <div className="flex items-center gap-3">
        <Image
          src={product.imageUrl || `/placeholder.svg?width=60&height=60&query=${encodeURIComponent(product.name)}`}
          alt={product.name}
          width={60}
          height={60}
          className="rounded-md object-cover"
        />
        <div>
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{product.name}</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {new Intl.NumberFormat("en-US", { style: "currency", currency: product.currency }).format(product.price)}
          </p>
          <Button
            size="xs"
            variant="outline"
            className="mt-1 text-xs h-6 border-white/30 hover:bg-white/20 text-slate-700 dark:text-slate-200"
          >
            詳細を見る
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user"

  return (
    <div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex items-start gap-2 max-w-[80%] p-3 rounded-xl
          ${
            isUser
              ? "bg-sky-500/70 text-white rounded-br-none backdrop-blur-md border border-sky-400/50"
              : "bg-white/50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-100 rounded-bl-none backdrop-blur-md border border-white/30 dark:border-slate-600/50"
          }`}
      >
        {isUser ? null : <Bot className="h-5 w-5 text-sky-500 dark:text-sky-400 flex-shrink-0 mt-0.5" />}
        <div>
          <p className="text-sm whitespace-pre-line">{message.text}</p>
          {message.products && message.products.length > 0 && (
            <div className="mt-3 space-y-2">
              <h5 className="text-xs font-medium text-slate-700 dark:text-slate-200">おすすめ商品:</h5>
              {message.products.map((product) => (
                <ProductSuggestionCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <p className="text-xs mt-1.5 opacity-70 text-right">
            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
        {isUser ? <User className="h-5 w-5 text-white flex-shrink-0 mt-0.5" /> : null}
      </div>
    </div>
  )
}
