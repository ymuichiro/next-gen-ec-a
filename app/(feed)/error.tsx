"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function FeedError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Unhandled error in feed segment:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-8">
      <AlertTriangle className="w-16 h-16 mb-6 text-red-500 dark:text-red-400" />
      <h2 className="text-3xl font-semibold mb-4">問題が発生しました</h2>
      <p className="text-lg mb-2 text-center">フィードの読み込み中に予期せぬエラーが発生しました。</p>
      <p className="text-sm mb-6 text-center text-red-600 dark:text-red-400">エラー詳細: {error.message}</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant="destructive"
        className="bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600"
      >
        再試行する
      </Button>
    </div>
  );
}
