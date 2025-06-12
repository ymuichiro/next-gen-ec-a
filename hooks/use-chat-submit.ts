import { useState } from "react";
import { toast } from "sonner";

export interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  products?: any[];
  timestamp: Date;
  showAsGrid?: boolean;
  imageUrl?: string[];
}

export function useChatSubmit() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-ai-message",
      sender: "ai",
      text: "こんにちは！ AIショッピングアシスタントです。どのようなお手伝いができますか？",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [attachments, setAttachments] = useState<string[]>([]);
  const [isSending, setIsSending] = useState(false);

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

      setAttachments((prev) => [...prev, uploadUrl]);
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
    const newMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: input || (attachments.length > 0 ? "画像を送信しました。" : ""),
      imageUrl: attachments.length > 0 ? [...attachments] : undefined,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    try {
      const res = await fetch("/api/ai/find-similar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          attachments,
          timestamp: newMessage.timestamp,
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
            sender: "ai",
            text: data.text ?? "",
            products: data.products,
            imageUrl: data.products?.imageUrl ? [data.products.imageUrl] : undefined,
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
  };
}
