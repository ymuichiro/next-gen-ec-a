"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { EnrichedProductPost, Product } from "@/lib/types";
import { MoreHorizontal, Search, ShoppingBag, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { RelatedProductsModal } from "./related-products-modal";
import { UserAvatarWithTrust } from "./user-avatar-with-trust";

interface ProductPostCardProps {
  post: EnrichedProductPost;
}

export function ProductPostCard({ post }: ProductPostCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const handleFindSimilar = () => {
    setSelectedProductForModal(post.product);
    setIsModalOpen(true);
  };

  const [liked, setLiked] = useState(false);
  const handleLike = () => setLiked(!liked);

  return (
    <>
      <Card className="w-full glass-card dark:glass-card-dark rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col">
        {/* ヘッダー - モバイルでパディング調整 */}
        <CardHeader className="p-2 lg:p-3 flex flex-row justify-between items-center">
          <UserAvatarWithTrust user={post.user} size="sm" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 lg:h-8 lg:w-8 text-slate-600 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-white/10"
              >
                <MoreHorizontal className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-morphism dark:glass-morphism-dark rounded-lg">
              <button
                type="button"
                className="hover:bg-white/20 dark:hover:bg-white/10 text-sm text-slate-700 dark:text-slate-200 w-full text-left px-2 py-1.5 rounded-md"
                onClick={() => alert("Share action!")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    alert("Share action!");
                  }
                }}
              >
                共有する
              </button>
              <button
                type="button"
                className="hover:bg-white/20 dark:hover:bg-white/10 text-sm text-slate-700 dark:text-slate-200 w-full text-left px-2 py-1.5 rounded-md"
                onClick={() => alert("Report action!")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    alert("Report action!");
                  }
                }}
              >
                報告する
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        {/* 商品画像 */}-
        {post.product.imageUrl && (
          <button
            type="button"
            className="relative w-full bg-white/10 dark:bg-white/5 cursor-pointer p-0 border-none"
            onClick={() => alert(`View product: ${post.product.name}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                alert(`View product: ${post.product.name}`);
              }
            }}
          >
            <Image
              src={post.product.imageUrl || "/placeholder.svg"}
              alt={post.product.name}
              width={500}
              height={0}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              priority={post.id === "post1"}
              className="opacity-95"
            />
          </button>
        )}
        {/* コンテンツ - モバイルでパディング調整 */}
        <CardContent className="p-2 lg:p-3 flex-grow">
          <button
            type="button"
            className="text-sm lg:text-base font-semibold text-slate-800 dark:text-slate-100 mb-1 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 bg-transparent border-none p-0 text-left w-full"
            onClick={() => alert(`View product: ${post.product.name}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                alert(`View product: ${post.product.name}`);
              }
            }}
          >
            {post.product.name}
          </button>
          {post.caption && (
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-2">{post.caption}</p>
          )}
        </CardContent>
        {/* フッター - モバイルでボタンサイズ調整 */}
        <CardFooter className="p-2 lg:p-3 flex justify-between items-center border-t border-white/20 dark:border-white/10 mt-auto">
          <div className="flex items-center gap-0.5 lg:gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={`h-7 w-7 lg:h-8 lg:w-8 hover:bg-white/20 dark:hover:bg-white/10 rounded-full ${
                liked ? "text-sky-600 dark:text-sky-400" : "text-slate-500 dark:text-slate-400"
              }`}
              onClick={handleLike}
            >
              <ThumbsUp className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 lg:h-8 lg:w-8 text-slate-500 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-white/10 rounded-full"
              onClick={handleFindSimilar}
            >
              <Search className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
            </Button>
          </div>
          <Button
            size="sm"
            className="h-7 lg:h-8 text-xs bg-blue-600/80 hover:bg-blue-700/80 dark:bg-blue-500/70 dark:hover:bg-blue-600/70 text-white rounded-lg shadow-md backdrop-blur-sm px-2 lg:px-3"
            onClick={() => alert(`Buy product: ${post.product.name}`)}
          >
            <ShoppingBag className="mr-1 lg:mr-1.5 h-3 w-3" />
            <span className="hidden sm:inline">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: post.product.currency,
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(post.product.price)}
            </span>
            <span className="sm:hidden">購入</span>
          </Button>
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
  );
}
