"use client"

import { AppHeader } from "@/components/ecommerce-ai/app-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { UserCircle, Mail, CreditCard, ArrowLeft } from "lucide-react"

// モックユーザーデータ
const mockUserProfile = {
  id: "user123",
  username: "aether_shopper",
  email: "user.aether@example.com",
  avatarUrl: "/placeholder.svg?width=100&height=100",
  paymentInfo: {
    cardType: "Visa",
    last4: "4242",
    expiry: "12/2025",
  },
}

export default function ProfilePage() {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="min-h-screen mist-background dark:mist-background-dark flex flex-col">
      <AppHeader />
      <main className="flex-grow pt-14 lg:pt-16 p-4 flex items-center justify-center">
        <Card className="w-full max-w-2xl glass-card dark:glass-card-dark rounded-2xl text-slate-800 dark:text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              <UserCircle className="inline-block mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              マイページ
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-1" />
                ホームに戻る
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-24 w-24 border-4 border-white/50 dark:border-slate-600/50 shadow-lg">
                <AvatarImage src={mockUserProfile.avatarUrl || "/placeholder.svg"} alt={mockUserProfile.username} />
                <AvatarFallback className="bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-4xl">
                  {getInitials(mockUserProfile.username)}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">@{mockUserProfile.username}</h2>
            </div>

            <Separator className="bg-white/20 dark:bg-white/10" />

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 border border-white/20 dark:border-white/10 rounded-lg glass-morphism dark:glass-morphism-dark">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">メールアドレス</p>
                  <p className="font-medium">{mockUserProfile.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 border border-white/20 dark:border-white/10 rounded-lg glass-morphism dark:glass-morphism-dark">
                <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">決済情報</p>
                  <p className="font-medium">
                    {mockUserProfile.paymentInfo.cardType} **** **** **** {mockUserProfile.paymentInfo.last4} (有効期限:{" "}
                    {mockUserProfile.paymentInfo.expiry})
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                className="border-blue-500/50 text-blue-700 dark:text-blue-300 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 rounded-md backdrop-blur-sm"
                onClick={() => alert("設定を編集 (未実装)")}
              >
                設定を編集
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
