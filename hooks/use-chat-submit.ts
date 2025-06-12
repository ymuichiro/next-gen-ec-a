import type { ChatContent, ChatMessageModel } from "@/lib/types";
import { useState } from "react";
import { toast } from "sonner";

export function useChatSubmit() {
  const [messages, setMessages] = useState<ChatMessageModel[]>([
    {
      id: "initial-ai-message",
      sender: "assistant",
      content: [
        {
          type: "text" as const,
          text: "こんにちは！ AIショッピングアシスタントです。どのようなお手伝いができますか？",
        },
      ],
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [attachments, setAttachments] = useState<ChatContent[]>([]);
  const [isSending, setIsSending] = useState(false);

  // チャットリセット用の初期メッセージ
  const initialMessage: ChatMessageModel = {
    id: "initial-ai-message",
    sender: "assistant",
    content: [{ type: "text", text: "こんにちは！ AIショッピングアシスタントです。どのようなお手伝いができますか？" }],
    timestamp: new Date(),
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isSending) {
      return;
    }
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    let uploadUrl: string | null = null;
    try {
      // fileNameをAPIに渡すよう修正
      const res = await fetch("/api/ai/blob-upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name }),
      });
      if (!res.ok) {
        toast.error("ファイルアップロードURLの取得に失敗しました");
        return;
      }
      const data = await res.json();
      uploadUrl = data.url;
    } catch {
      toast.error("ファイルアップロードURLの取得に失敗しました");
      return;
    }
    if (!uploadUrl) {
      toast.error("アップロードURLが取得できませんでした");
      return;
    }
    try {
      const uploadRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "x-ms-blob-type": "BlockBlob",
          "Content-Type": file.type,
        },
        body: file,
      });
      if (!uploadRes.ok) {
        toast.error("ファイルのアップロードに失敗しました");
        return;
      }

      setAttachments((prev) => [...prev, { type: "image", imageUrl: uploadUrl, mimeType: file.type }]);
      event.target.value = "";
    } catch {
      toast.error("ファイルのアップロードに失敗しました");
      return;
    }
  };

  const onSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (isSending) {
      return;
    }
    if (!input.trim() && attachments.length === 0) {
      return;
    }
    setIsSending(true);
    const newMessage: ChatMessageModel = {
      id: `user-${Date.now()}`,
      sender: "user",
      content: [...(input ? [{ type: "text" as const, text: input }] : []), ...attachments],
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    try {
      const res = await fetch("/api/ai/find-similar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newMessage],
        }),
      });
      if (!res.ok) {
        toast.error("メッセージの送信に失敗しました");
        return;
      }
      // レスポンスからAIメッセージを取得して追加
      const data = await res.json();
      if (data && (data.text || data.products)) {
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            sender: "assistant",
            content: data.text ? [{ type: "text" as const, text: data.text }] : [],
            products: data.products,
            timestamp: new Date(),
          },
        ]);
      }
      setInput("");
      setAttachments([]);
    } catch {
      toast.error("メッセージの送信に失敗しました");
    } finally {
      setIsSending(false);
    }
  };

  // チャットリセット関数
  const resetChat = () => {
    setMessages([
      {
        ...initialMessage,
        timestamp: new Date(), // リセット時に時刻を更新
      },
    ]);
    setInput("");
    setAttachments([]);
    toast.success("新しいスレッドを開始しました");
  };

  return {
    messages,
    setMessages,
    input,
    setInput,
    attachments,
    setAttachments,
    onSubmit,
    isSending,
    handleFileSelect,
    resetChat,
  };
}
