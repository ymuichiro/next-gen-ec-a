"use client"

import { AppHeader } from "@/components/ecommerce-ai/app-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowLeft } from "lucide-react"

// モックカートアイテムデータ
const mockCartItems = [
  {
    id: "cart-item-1",
    productId: "prod1",
    name: "Eco-Friendly Water Bottle",
    price: 25.99,
    currency: "USD",
    imageUrl: "/placeholder.svg?width=100&height=100",
    quantity: 1,
  },
  {
    id: "cart-item-2",
    productId: "prod2",
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.5,
    currency: "USD",
    imageUrl: "/placeholder.svg?width=100&height=100",
    quantity: 1,
  },
  {
    id: "cart-item-3",
    productId: "prod4",
    name: "Organic Cotton T-Shirt",
    price: 35.0,
    currency: "USD",
    imageUrl: "/placeholder.svg?width=100&height=100",
    quantity: 2,
  },
]

export default function CartPage() {
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.0 // 仮の送料
  const total = subtotal + shipping

  return (
    <div className="min-h-screen mist-background dark:mist-background-dark flex flex-col">
      <AppHeader />
      <main className="flex-grow pt-14 lg:pt-16 p-4 flex items-center justify-center">
        <Card className="w-full max-w-3xl glass-card dark:glass-card-dark rounded-2xl text-slate-800 dark:text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              <ShoppingBag className="inline-block mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              ショッピングカート
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-1" />
                買い物を続ける
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockCartItems.length === 0 ? (
              <p className="text-center text-slate-500 dark:text-slate-400 py-8">カートに商品がありません。</p>
            ) : (
              <>
                {mockCartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-3 border border-white/20 dark:border-white/10 rounded-lg glass-morphism dark:glass-morphism-dark"
                  >
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {new Intl.NumberFormat("en-US", { style: "currency", currency: item.currency }).format(
                          item.price,
                        )}{" "}
                        x {item.quantity}
                      </p>
                    </div>
                    <div className="font-bold text-lg">
                      {new Intl.NumberFormat("en-US", { style: "currency", currency: item.currency }).format(
                        item.price * item.quantity,
                      )}
                    </div>
                  </div>
                ))}
                <Separator className="my-4 bg-white/20 dark:bg-white/10" />
                <div className="space-y-2 text-right">
                  <div className="flex justify-between text-slate-700 dark:text-slate-200">
                    <span>小計:</span>
                    <span>
                      {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-700 dark:text-slate-200">
                    <span>送料:</span>
                    <span>
                      {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-slate-900 dark:text-slate-50">
                    <span>合計:</span>
                    <span>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total)}</span>
                  </div>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              className="w-full bg-blue-600/80 hover:bg-blue-700/80 dark:bg-blue-500/70 dark:hover:bg-blue-600/70 text-white rounded-lg shadow-md backdrop-blur-sm"
              disabled={mockCartItems.length === 0}
              onClick={() => alert("決済ページへ進みます (未実装)")}
            >
              決済に進む
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
