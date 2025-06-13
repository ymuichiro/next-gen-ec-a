"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";

type UseVoiceInputProps = {
  setInput: (text: string) => void;
};

export function useVoiceInput({ setInput }: UseVoiceInputProps) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const isRecordingRef = useRef(false);
  const [isRecording, setIsRecording] = useState(false);

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      // stopイベントハンドラーで残りの処理を行うため、ここでは何もしない
    }
  };

  const onVoiceClick = async () => {
    if (isRecordingRef.current) {
      stopRecording();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioChunksRef.current = [];
      isRecordingRef.current = true;
      setIsRecording(true);
      toast("録音開始。話しかけてください…");
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      recorder.onstop = async () => {
        isRecordingRef.current = false;
        setIsRecording(false);
        for (const t of stream.getTracks()) {
          t.stop();
        }
        toast("録音終了。音声を解析中…");
        const sttRes = await fetch("/api/ai/speech-to-text", {
          method: "POST",
          body: new Blob(audioChunksRef.current, { type: "audio/webm" }),
        });
        if (!sttRes.ok) {
          throw new Error("音声認識に失敗しました");
        }
        const { transcript } = await sttRes.json();
        console.log("音声認識結果:", transcript);
        if (!transcript) {
          toast("音声が認識できませんでした");
        } else {
          setInput(transcript);
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
      setIsRecording(false);
      toast("マイクの利用や音声認識でエラーが発生しました");
    }
  };

  return {
    onVoiceClick,
    stopRecording,
    isRecording,
    isRecordingRef,
  };
}
