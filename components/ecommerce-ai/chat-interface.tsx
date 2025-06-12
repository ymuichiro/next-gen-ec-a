"use client"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, Mic } from "lucide-react"
import { ChatMessage } from "./chat-message"
import type { Product } from "@/lib/types"
import { mockProducts } from "@/lib/mock-data" // For mock suggestions

interface Message {
  id: string
  sender: "user" | "ai"
  text: string
  products?: Product[]
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-ai-message",
      sender: "ai",
      text: "こんにちは！どんな商品をお探しですか？フォローしているユーザーのおすすめ商品も紹介できますよ。",
      timestamp: new Date(Date.now() - 1000 * 60), // 1 minute ago
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

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

    // Simulate AI response with product suggestions
    setTimeout(() => {
      const aiResponseText = `「${inputValue.trim()}」ですね。こちらのような商品はいかがでしょうか？`
      // Pick 2 random products for suggestion
      const suggestedProducts = [...mockProducts].sort(() => 0.5 - Math.random()).slice(0, 2)

      const newAiMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: aiResponseText,
        products: suggestedProducts,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, newAiMessage])
    }, 1000)

    setInputValue("")
  }

  return (
    <div className="flex flex-col h-full bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl border border-white/20 dark:border-slate-700/20 rounded-xl shadow-2xl overflow-hidden">
      <header className="p-4 border-b border-white/20 dark:border-slate-700/20">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">AI Shopping Assistant</h2>
      </header>

      <div className="flex-grow p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <footer className="p-3 border-t border-white/20 dark:border-slate-700/20">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-700/30"
          >
            <Mic className="h-5 w-5" />
          </Button>
          <Input
            type="text"
            placeholder="AIにメッセージを送信..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-grow bg-white/40 dark:bg-slate-700/40 border-white/30 dark:border-slate-600/30 placeholder-slate-500 dark:placeholder-slate-400 text-slate-800 dark:text-slate-100 focus:ring-sky-500 focus:border-sky-500"
          />
          <Button onClick={handleSendMessage} size="icon" className="bg-sky-500 hover:bg-sky-600 text-white">
            <Send className="h-5 w-5" />
            <span className="sr-only">送信</span>
          </Button>
        </div>
      </footer>
    </div>
  )
}
