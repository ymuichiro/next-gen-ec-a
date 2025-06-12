import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import Image from "next/image";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  products?: Product[];
  timestamp: Date;
  showAsGrid?: boolean;
  imageUrl?: string; // 画像URLを追加
}

interface ChatMessageProps {
  message: Message;
  isMobile?: boolean;
}

function ProductSuggestionCard({ product, isMobile = false }: { product: Product; isMobile?: boolean }) {
  return (
    <div
      className={cn(
        "border border-white/20 dark:border-white/10 rounded-lg glass-morphism dark:glass-morphism-dark hover:bg-white/30 dark:hover:bg-white/10 transition-colors",
        isMobile ? "mt-3 p-3" : "mt-2 p-3"
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          src={product.imageUrl || `/placeholder.svg?width=60&height=60&query=${encodeURIComponent(product.name)}`}
          alt={product.name}
          width={isMobile ? 70 : 60}
          height={isMobile ? 70 : 60}
          className="rounded-md object-cover"
        />
        <div>
          <h4 className={cn("font-semibold text-slate-800 dark:text-slate-100", isMobile ? "text-sm" : "text-sm")}>
            {product.name}
          </h4>
          <p className={cn("text-slate-600 dark:text-slate-300", isMobile ? "text-sm" : "text-xs")}>
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: product.currency,
            }).format(product.price)}
          </p>
          <Button
            size="xs"
            variant="outline"
            className={cn(
              "border-blue-400/50 hover:bg-blue-400/20 text-blue-700 dark:text-blue-300 rounded-md backdrop-blur-sm",
              isMobile ? "mt-2 text-sm h-7" : "mt-1 text-xs h-6"
            )}
          >
            詳細を見る
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ChatMessage({ message, isMobile = false }: ChatMessageProps) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={cn(
          "flex items-start gap-2 max-w-[80%] rounded-xl shadow-md",
          isUser
            ? "bg-blue-600/80 text-white rounded-br-none backdrop-blur-md border border-blue-500/50"
            : "glass-morphism dark:glass-morphism-dark text-slate-800 dark:text-slate-100 rounded-bl-none",
          isMobile ? "p-3" : "p-3"
        )}
      >
        {isUser ? null : (
          <Bot
            className={cn("text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5", isMobile ? "h-6 w-6" : "h-5 w-5")}
          />
        )}
        <div>
          <p className={cn("whitespace-pre-line", isMobile ? "text-sm" : "text-sm")}>{message.text}</p>
          {/* 画像が表示される場合 */}
          {message.imageUrl && (
            <div className="mt-2">
              <Image
                src={message.imageUrl || "/placeholder.svg"}
                alt="添付画像"
                width={200}
                height={150}
                className="rounded-lg object-cover max-w-full h-auto"
              />
            </div>
          )}
          {message.products && message.products.length > 0 && !message.showAsGrid && (
            <div className="space-y-2">
              {message.products.map((product) => (
                <ProductSuggestionCard key={product.id} product={product} isMobile={isMobile} />
              ))}
            </div>
          )}
          <p className={cn("opacity-70 text-right", isMobile ? "text-sm mt-2" : "text-xs mt-1.5")}>
            {message.timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        {isUser ? <User className={cn("text-white flex-shrink-0 mt-0.5", isMobile ? "h-6 w-6" : "h-5 w-5")} /> : null}
      </div>
    </div>
  );
}
