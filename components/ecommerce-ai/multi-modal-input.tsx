"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mic, Paperclip, Send } from "lucide-react";
import { type ChangeEvent, useRef } from "react";

interface MultiModalInputProps {
  isMobile?: boolean;
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onFileSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  onVoiceClick?: () => void;
  isSending?: boolean;
  isRecording?: boolean;
}

export function MultiModalInput({
  isMobile = false,
  input,
  onInputChange,
  onSubmit,
  onFileSelect,
  onVoiceClick,
  isSending = false,
  isRecording = false,
  attachments = [],
}: MultiModalInputProps & { attachments?: string[]; }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={cn("flex flex-col gap-2 w-full")}>
      {/* 添付画像プレビュー */}
      {attachments && attachments.length > 0 && (
        <div className="flex gap-2 mb-1">
          {attachments.map((url, idx) => (
            <div
              key={url}
              className="relative w-20 h-20 rounded overflow-hidden border border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40"
            >
              <img
                src={url}
                alt={`添付画像${idx + 1}`}
                className="object-cover w-full h-full"
                style={{ minWidth: 0, minHeight: 0 }}
              />
            </div>
          ))}
        </div>
      )}
      <div className={cn("flex items-center", isMobile ? "gap-3" : "gap-1 lg:gap-2")}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileSelect}
          accept="image/*"
          className="hidden"
          disabled={isSending}
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => !isSending && fileInputRef.current?.click()}
          disabled={isSending}
          className={cn(
            "text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10 rounded-full flex-shrink-0",
            isMobile ? "h-10 w-10" : "h-8 w-8 lg:h-10 lg:w-10"
          )}
        >
          <Paperclip className={cn(isMobile ? "h-5 w-5" : "h-4 w-4 lg:h-5 lg:w-5")} />
          <span className="sr-only">ファイルを添付</span>
        </Button>
        <Button
          variant={isRecording ? "destructive" : "ghost"}
          size="icon"
          onClick={onVoiceClick}
          disabled={isSending}
          className={cn(
            isRecording
              ? "text-white dark:text-white bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 animate-pulse"
              : "text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10",
            "rounded-full flex-shrink-0",
            isMobile ? "h-10 w-10" : "h-8 w-8 lg:h-10 lg:w-10"
          )}
        >
          <Mic className={cn(isMobile ? "h-5 w-5" : "h-4 w-4 lg:h-5 lg:w-5")} />
          <span className="sr-only">{isRecording ? "録音停止" : "音声入力"}</span>
        </Button>
        <Input
          type="text"
          placeholder="メッセージを入力..."
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => {
            // IME変換中はEnterで送信しない（isComposingだけでなくkeyCode=229も考慮）
            // e.nativeEvent.keyCode === 229 は非推奨だが日本語IME対策として併用
            if (
              e.key === "Enter" &&
              !isSending &&
              !(e.nativeEvent as any).isComposing &&
              (typeof (e.nativeEvent as any).keyCode !== "number" || (e.nativeEvent as any).keyCode !== 229)
            ) {
              onSubmit();
            }
          }}
          disabled={isSending}
          className={cn(
            "flex-grow bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/20",
            "placeholder-slate-500 dark:placeholder-slate-400 text-slate-800 dark:text-slate-100",
            "focus:ring-blue-500 focus:border-blue-500 rounded-lg backdrop-blur-sm text-sm",
            isMobile ? "h-10" : "h-8 lg:h-10"
          )}
        />
        <Button
          onClick={onSubmit}
          size="icon"
          disabled={isSending}
          className={cn(
            "bg-blue-600 hover:bg-blue-700 text-white rounded-lg backdrop-blur-sm flex-shrink-0",
            isMobile ? "h-10 w-10" : "h-8 w-8 lg:h-10 lg:w-10"
          )}
        >
          <Send className={cn(isMobile ? "h-5 w-5" : "h-4 w-4 lg:h-5 lg:w-5")} />
          <span className="sr-only">送信</span>
        </Button>
      </div>
    </div>
  );
}
