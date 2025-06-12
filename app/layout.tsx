import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AppHeader } from "@/components/ecommerce-ai/app-header" // AppHeaderをインポート

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen mist-background dark:mist-background-dark">
        {" "}
        {/* 背景スタイルを適用 */}
        <AppHeader /> {/* AppHeaderを配置 */}
        <main className="pt-14 lg:pt-16">
          {" "}
          {/* ヘッダーの高さ分パディングを追加 */}
          {children}
        </main>
      </body>
    </html>
  )
}
