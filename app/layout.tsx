import { AppHeader } from "@/components/ecommerce-ai/app-header"; // AppHeaderをインポート
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Gen EC",
  description: "Next Gen EC",
  generator: "Next Gen EC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen mist-background dark:mist-background-dark">
        {/* 背景スタイルを適用 */}
        <AppHeader /> {/* AppHeaderを配置 */}
        <main className="pt-14 lg:pt-16">
          {" "}
          {/* ヘッダーの高さ分パディングを追加 */}
          {children}
        </main>
      </body>
    </html>
  );
}
