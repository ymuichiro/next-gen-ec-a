"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThumbsUp, MessageCircle, Share2, Search, ShoppingBag, Gift } from "lucide-react"
import type { EnrichedProductPost, Product } from "@/lib/types"
import { UserAvatarWithTrust } from "./user-avatar-with-trust"
import { RelatedProductsModal } from "./related-products-modal"
import { formatDistanceToNow } from "date-fns"

interface ProductPostCardProps {
  post: EnrichedProductPost
}

export function ProductPostCard({ post }: ProductPostCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null)

  const handleFindSimilar = () => {
    setSelectedProductForModal(post.product)
    setIsModalOpen(true)
  }

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto bg-white/40 dark:bg-slate-800/40 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 shadow-xl rounded-2xl overflow-hidden">
        <CardHeader className="flex flex-row justify-between items-start p-4">
          <UserAvatarWithTrust user={post.user} />
          <span className="text-xs text-slate-600 dark:text-slate-400">{timeAgo}</span>
        </CardHeader>
        <CardContent className="p-0">
          {post.product.imageUrl && (
            <div className="relative w-full aspect-[16/10] bg-slate-200 dark:bg-slate-700">
              <Image
                src={post.product.imageUrl || "/placeholder.svg"}
                alt={post.product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={post.id === "post1" || post.id === "post2"}
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">{post.product.name}</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2 whitespace-pre-line">{post.caption}</p>
          </div>
        </CardContent>
        <Separator className="border-white/20 dark:border-slate-700/50" />
        <CardFooter className="p-4 flex flex-col space-y-3">
          <div className="flex justify-between items-center w-full">
            <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">
              {new Intl.NumberFormat("en-US", { style: "currency", currency: post.product.currency }).format(
                post.product.price,
              )}
            </p>
            <div className="flex flex-col items-end space-y-1">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/30 dark:bg-slate-700/30 hover:bg-white/50 dark:hover:bg-slate-600/50 backdrop-blur-sm border-white/40 dark:border-slate-600/40 text-sky-700 dark:text-sky-300 shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <ShoppingBag className="mr-2 h-5 w-5 text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors" />
                Buy Now
              </Button>
              <p className="text-xs text-sky-700 dark:text-sky-400 flex items-center">
                <Gift className="h-3 w-3 mr-1" /> Earn rewards!
              </p>
            </div>
          </div>
          <Separator className="border-white/20 dark:border-slate-700/50" />
          <div className="flex justify-around items-center w-full pt-1">
            {[
              { icon: ThumbsUp, label: `${post.likes} Likes` },
              { icon: MessageCircle, label: `${post.commentsCount} Comments` },
              { icon: Search, label: "Find Similar", action: handleFindSimilar },
              { icon: Share2, label: "Share" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-700/40 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                onClick={item.action}
              >
                <item.icon className="mr-1.5 h-4 w-4" /> {item.label}
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
      {selectedProductForModal && (
        <RelatedProductsModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          sourceProduct={selectedProductForModal}
        />
      )}
    </>
  )
}
