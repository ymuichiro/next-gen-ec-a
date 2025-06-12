"use client";

import { Button } from "@/components/ui/button";
import { useChatSubmit } from "@/hooks/use-chat-submit";
import { useVoiceInput } from "@/hooks/use-voice-input";
import { cn } from "@/lib/utils";
import { MessageCirclePlus } from "lucide-react";
import { useEffect, useRef } from "react";
import { ChatMessage } from "./chat-message";
import { MultiModalInput } from "./multi-modal-input";
import { ProductSuggestionGrid } from "./product-suggestion-grid";

interface ChatInterfaceProps {
  isMobile?: boolean;
}

export function ChatInterface({ isMobile = false }: ChatInterfaceProps) {
  const { messages, input, setInput, isSending, onSubmit, handleFileSelect, attachments, resetChat } = useChatSubmit();
  const { onVoiceClick, isRecording } = useVoiceInput({ setInput });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className={cn(
        "flex flex-col h-full glass-card dark:glass-card-dark overflow-hidden",
        isMobile ? "rounded-t-2xl" : "rounded-xl lg:rounded-2xl"
      )}
    >
      {/* ヘッダー */}
      <header className={cn("border-b border-white/20 dark:border-white/10", isMobile ? "p-4 pt-12" : "p-3 lg:p-4")}>
        <div className="flex items-center justify-between">
          <h2
            className={cn(
              "font-semibold text-slate-800 dark:text-slate-100",
              isMobile ? "text-xl" : "text-lg lg:text-xl"
            )}
          >
            AI Shopping Assistant
          </h2>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size={isMobile ? "xs" : "sm"}
              className={cn(
                "text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10",
                isMobile ? "text-xs" : "text-xs"
              )}
              onClick={resetChat}
              type="button"
              aria-label="新規スレッド"
            >
              <MessageCirclePlus className={cn(isMobile ? "h-5 w-5" : "h-5 w-5 lg:h-5 lg:w-5")} />
            </Button>
          </div>
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
                  isMobile ? "p-3" : "p-2 lg:p-3"
                )}
              >
                <div className="w-full min-w-0">
                  <p className="text-sm whitespace-pre-line mb-2">
                    {msg.content.find((c) => c.type === "text")?.text ?? ""}
                  </p>
                  <ProductSuggestionGrid products={msg.products || []} isMobile={isMobile} />
                  <p className="text-xs mt-1.5 opacity-70 text-right">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <ChatMessage key={msg.id} message={msg} isMobile={isMobile} />
          )
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* フッター */}
      <footer className={cn("border-t border-white/20 dark:border-white/10", isMobile ? "p-4" : "p-2 lg:p-3")}>
        <MultiModalInput
          isMobile={isMobile}
          input={input}
          onInputChange={setInput}
          onSubmit={onSubmit}
          onFileSelect={handleFileSelect}
          onVoiceClick={onVoiceClick}
          isSending={isSending}
          isRecording={isRecording}
          attachments={attachments.filter((a) => a.type === "image").map((a) => a.imageUrl)}
        />
      </footer>
    </div>
  );
}
