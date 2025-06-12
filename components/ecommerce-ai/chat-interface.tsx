"use client"

import { useState, useRef, useEffect, type ChangeEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Mic, ShoppingBag, Paperclip } from "lucide-react" // Paperclipアイコンを追加
import { ChatMessage } from "./chat-message"
import { ProductSuggestionGrid } from "./product-suggestion-grid"
import type { Product } from "@/lib/types"
import { mockProducts } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  sender: "user" | "ai"
  text: string
  products?: Product[]
  timestamp: Date
  showAsGrid?: boolean
  imageUrl?: string // 画像URLを追加
}

interface ChatInterfaceProps {
  isMobile?: boolean
}

export function ChatInterface({ isMobile = false }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-ai-message",
      sender: "ai",
      text: "こんにちは！何かお探しですか？まずはこちらのおすすめ商品をご覧ください。",
      timestamp: new Date(Date.now() - 1000 * 60),
      products: [...mockProducts].sort(() => 0.5 - Math.random()).slice(0, 4),
      showAsGrid: true,
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null) // ファイル入力参照

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: inputValue.trim(),
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newUserMessage])

    setTimeout(() => {
      const productKeywords = ["シャツ", "Tシャツ", "靴", "シューズ", "ヘッドフォン", "イヤホン", "スピーカー"]
      const hasProductKeyword = productKeywords.some((keyword) =>
        inputValue.toLowerCase().includes(keyword.toLowerCase()),
      )

      let aiResponseText = ""
      let suggestedProducts: Product[] = []
      let showAsGrid = false

      if (hasProductKeyword) {
        aiResponseText = `こちらの商品はいかがですか？`
        suggestedProducts = [...mockProducts].sort(() => 0.5 - Math.random()).slice(0, 4)
        showAsGrid = true
      } else {
        aiResponseText = `「${inputValue.trim()}」ですね。こちらのような商品はいかがでしょうか？`
        suggestedProducts = [...mockProducts].sort(() => 0.5 - Math.random()).slice(0, 3)
        showAsGrid = false
      }

      const newAiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: aiResponseText,
        products: suggestedProducts,
        timestamp: new Date(),
        showAsGrid,
      }
      setMessages((prev) => [...prev, newAiMessage])
    }, 1000)

    setInputValue("")
  }

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file) // 一時的なURLを生成
      const newImageMessage: Message = {
        id: `user-image-${Date.now()}`,
        sender: "user",
        text: "画像を送信しました。", // 画像メッセージのテキスト
        imageUrl: imageUrl,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, newImageMessage])

      // AIからの返信をシミュレート
      setTimeout(() => {
        const aiResponse: Message = {
          id: `ai-response-${Date.now()}`,
          sender: "ai",
          text: "画像を拝見しました。どのような商品をお探しですか？",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiResponse])
      }, 1000)

      // ファイル入力のリセット
      event.target.value = ""
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      className={cn(
        "flex flex-col h-full glass-card dark:glass-card-dark overflow-hidden",
        isMobile ? "rounded-t-2xl" : "rounded-xl lg:rounded-2xl",
      )}
    >
      {/* ヘッダー */}
      <header className={cn("border-b border-white/20 dark:border-white/10", isMobile ? "p-4 pt-12" : "p-3 lg:p-4")}>
        <div className="flex items-center justify-between">
          <h2
            className={cn(
              "font-semibold text-slate-800 dark:text-slate-100",
              isMobile ? "text-xl" : "text-lg lg:text-xl",
            )}
          >
            AI Shopping Assistant
          </h2>
          <ShoppingBag
            className={cn("text-blue-600 dark:text-blue-400", isMobile ? "h-6 w-6" : "h-4 w-4 lg:h-5 lg:w-5")}
          />
        </div>
      </header>

      {/* メッセージエリア */}
      <div className={cn("flex-grow overflow-y-auto space-y-3 lg:space-y-4", isMobile ? "p-4" : "p-2 lg:p-4")}>
        {messages.map((msg) =>
          msg.showAsGrid ? (
            <div key={msg.id} className="mb-4 lg:mb-6">
              <div
                className={cn(
                  "flex items-start gap-2 max-w-full rounded-lg lg:rounded-xl shadow-md",
                  "glass-morphism dark:glass-morphism-dark text-slate-800 dark:text-slate-100 rounded-bl-none",
                  isMobile ? "p-3" : "p-2 lg:p-3",
                )}
              >
                <div className="w-full min-w-0">
                  <p className="text-sm whitespace-pre-line mb-2">{msg.text}</p>
                  <ProductSuggestionGrid products={msg.products || []} isMobile={isMobile} />
                  <p className="text-xs mt-1.5 opacity-70 text-right">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <ChatMessage key={msg.id} message={msg} isMobile={isMobile} />
          ),
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* フッター */}
      <footer className={cn("border-t border-white/20 dark:border-white/10", isMobile ? "p-4" : "p-2 lg:p-3")}>
        <div className={cn("flex items-center", isMobile ? "gap-3" : "gap-1 lg:gap-2")}>
          {/* ファイル入力（非表示） */}
          <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
          {/* ファイル添付ボタン */}
          <Button
            variant="ghost"
            size="icon"
            onClick={triggerFileInput}
            className={cn(
              "text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10 rounded-full flex-shrink-0",
              isMobile ? "h-10 w-10" : "h-8 w-8 lg:h-10 lg:w-10",
            )}
          >
            <Paperclip className={cn(isMobile ? "h-5 w-5" : "h-4 w-4 lg:h-5 lg:w-5")} />
            <span className="sr-only">ファイルを添付</span>
          </Button>
          {/* マイクボタン */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10 rounded-full flex-shrink-0",
              isMobile ? "h-10 w-10" : "h-8 w-8 lg:h-10 lg:w-10",
            )}
          >
            <Mic className={cn(isMobile ? "h-5 w-5" : "h-4 w-4 lg:h-5 lg:w-5")} />
            <span className="sr-only">音声入力</span>
          </Button>
          <Input
            type="text"
            placeholder="メッセージを入力..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className={cn(
              "flex-grow bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/20",
              "placeholder-slate-500 dark:placeholder-slate-400 text-slate-800 dark:text-slate-100",
              "focus:ring-blue-500 focus:border-blue-500 rounded-lg backdrop-blur-sm text-sm",
              isMobile ? "h-10" : "h-8 lg:h-10",
            )}
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            className={cn(
              "bg-blue-600 hover:bg-blue-700 text-white rounded-lg backdrop-blur-sm flex-shrink-0",
              isMobile ? "h-10 w-10" : "h-8 w-8 lg:h-10 lg:w-10",
            )}
          >
            <Send className={cn(isMobile ? "h-5 w-5" : "h-4 w-4 lg:h-5 lg:w-5")} />
            <span className="sr-only">送信</span>
          </Button>
        </div>
      </footer>
    </div>
  )
}
