"use client";

import { useRef } from "react";
import { toast } from "sonner";

type UseVoiceInputProps = {
  setInput: (text: string) => void;
};

export function useVoiceInput({ setInput }: UseVoiceInputProps) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const isRecordingRef = useRef(false);

  const onVoiceClick = async () => {
    if (isRecordingRef.current) {
      toast("録音中です。しばらくお待ちください。");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioChunksRef.current = [];
      isRecordingRef.current = true;
      toast("録音開始。話しかけてください…");
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      recorder.onstop = async () => {
        isRecordingRef.current = false;
        for (const t of stream.getTracks()) {
          t.stop();
        }
        toast("録音終了。音声を解析中…");
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const fileName = `voice-${Date.now()}.webm`;
        const res = await fetch("/api/ai/blob-upload-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileName, contentType: "audio/webm" }),
        });
        if (!res.ok) {
          throw new Error("アップロードURL取得失敗");
        }
        const { url } = await res.json();
        const putRes = await fetch(url, {
          method: "PUT",
          headers: { "x-ms-blob-type": "BlockBlob", "Content-Type": "audio/webm" },
          body: audioBlob,
        });
        if (!putRes.ok) {
          throw new Error("音声ファイルのアップロード失敗");
        }
        const sttRes = await fetch("/api/ai/speech-to-text", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blobUrl: url.split("?")[0], fileName }),
        });
        if (!sttRes.ok) {
          throw new Error("音声認識に失敗しました");
        }
        const { text } = await sttRes.json();
        if (!text) {
          toast("音声が認識できませんでした");
        } else {
          setInput(text);
          toast("音声認識が完了しました");
        }
      };
      mediaRecorderRef.current = recorder;
      recorder.start();
      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
        }
      }, 30000);
    } catch {
      isRecordingRef.current = false;
      toast("マイクの利用や音声認識でエラーが発生しました");
    }
  };

  return { onVoiceClick, isRecordingRef };
}
