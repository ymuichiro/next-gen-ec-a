import type React from "react"
import type { Metadata } from "next"
import { AppHeader } from "@/components/ecommerce-ai/app-header" // Import the new header

export const metadata: Metadata = {
  title: "AI Social Commerce", // Updated title
  description: "Discover and shop products in a new, interactive way with AI.", // Updated description
}

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-slate-100 to-gray-200 dark:from-slate-900 dark:to-gray-800 min-h-screen">
        <AppHeader />
        {/* Add padding-top to main content to account for fixed header height (h-16 = 4rem = 64px) */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
