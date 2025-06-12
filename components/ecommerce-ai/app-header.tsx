"use client"

import Link from "next/link"
import { ShoppingCart, UserCircle, Zap } from "lucide-react" // Zap for a futuristic logo placeholder
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" // For potential cart item count

export function AppHeader() {
  // Placeholder for cart item count
  const cartItemCount = 3

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/30 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Site Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-sky-600 dark:text-sky-400 hover:opacity-80 transition-opacity"
        >
          <Zap className="h-7 w-7" />
          <span>AetherStore</span>
        </Link>

        {/* Navigation Actions */}
        <nav className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-700/50 rounded-full"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs bg-red-500/80 dark:bg-red-600/80 border-2 border-white/80 dark:border-slate-800/80 rounded-full"
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
            className="text-slate-700 dark:text-slate-300 hover:bg-white/30 dark:hover:bg-slate-700/50 rounded-full"
            asChild
          >
            <Link href="/profile">
              <UserCircle className="h-7 w-7" />
              <span className="sr-only">マイページ</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
