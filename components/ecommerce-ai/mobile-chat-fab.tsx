"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { ChatInterface } from "./chat-interface"
import { cn } from "@/lib/utils"

export function MobileChatFAB() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* FABボタン */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 z-40 h-14 w-14 rounded-full shadow-lg",
          "bg-blue-600 hover:bg-blue-700 text-white",
          "transition-all duration-300 ease-in-out",
          "glass-morphism border-2 border-white/30",
          isOpen && "scale-0 opacity-0",
        )}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">チャットを開く</span>
      </Button>

      {/* チャットオーバーレイ */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        {/* 背景オーバーレイ */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* チャットウィンドウ */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[80vh] transition-transform duration-300 ease-in-out",
            isOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="h-full mx-2 mb-2 rounded-t-2xl overflow-hidden relative">
            {/* 閉じるボタン */}
            <Button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 text-slate-700 dark:text-slate-200 backdrop-blur-sm"
              size="icon"
              variant="ghost"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">チャットを閉じる</span>
            </Button>

            {/* チャットインターフェース */}
            <div className="h-full">
              <ChatInterface isMobile={true} />
            </div>
          </div>
        </div>
      </div>

      {/* 未読メッセージバッジ（オプション） */}
      {!isOpen && (
        <div className="fixed bottom-16 right-4 z-40 pointer-events-none">
          <div className="bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium shadow-lg animate-pulse">
            3
          </div>
        </div>
      )}
    </>
  )
}
