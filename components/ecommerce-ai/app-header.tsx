"use client"

import Link from "next/link"
import { ShoppingCart, UserCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function AppHeader() {
  const cartItemCount = 3
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism dark:glass-morphism-dark">
      <div className="container mx-auto px-3 lg:px-4 h-14 lg:h-16 flex items-center justify-between">
        {/* ロゴ */}
        <Link
          href="/"
          className="flex items-center gap-1.5 lg:gap-2 text-lg lg:text-xl font-bold text-blue-700 dark:text-blue-300 hover:opacity-80 transition-opacity"
        >
          <Zap className="h-5 w-5 lg:h-7 lg:w-7 text-sky-600 dark:text-sky-400" />
          <span className="hidden sm:block">AetherStore</span>
          <span className="sm:hidden">Aether</span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10 rounded-full"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-4 w-4 lg:h-5 lg:w-5 p-0 flex items-center justify-center text-xs bg-sky-500 dark:bg-sky-600 border-2 border-white/50 dark:border-white/30 rounded-full text-white"
                >
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">ショッピングカート</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10 rounded-full"
            asChild
          >
            <Link href="/profile">
              <UserCircle className="h-6 w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-blue-400" />
              <span className="sr-only">マイページ</span>
            </Link>
          </Button>
        </nav>

        {/* モバイルナビゲーション */}
        <div className="md:hidden flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10 rounded-full h-9 w-9"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs bg-sky-500 dark:bg-sky-600 border-2 border-white/50 dark:border-white/30 rounded-full text-white"
                >
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">ショッピングカート</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-slate-700 dark:text-slate-200 hover:bg-white/20 dark:hover:bg-white/10 rounded-full h-9 w-9"
            asChild
          >
            <Link href="/profile">
              <UserCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="sr-only">マイページ</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
