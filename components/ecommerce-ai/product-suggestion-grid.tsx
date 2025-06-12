"use client";

import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface ProductSuggestionGridProps {
  products: Product[];
  isMobile?: boolean;
}

export function ProductSuggestionGrid({ products, isMobile = false }: ProductSuggestionGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // スクロール状態をチェック
  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [products, checkScrollButtons]);

  if (!products || products.length === 0) {
    return null;
  }

  // スクロール関数
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 200 : 250;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cn("w-full relative", isMobile ? "mt-3" : "mt-2 lg:mt-3")}>
      {/* 左スクロールボタン */}
      {canScrollLeft && (
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full",
            "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md",
            "hover:bg-white/90 dark:hover:bg-slate-700/90",
            "text-slate-700 dark:text-slate-200",
            isMobile ? "h-8 w-8" : "h-7 w-7"
          )}
          onClick={() => scroll("left")}
        >
          <ChevronLeft className={cn(isMobile ? "h-4 w-4" : "h-3.5 w-3.5")} />
        </Button>
      )}

      {/* 右スクロールボタン */}
      {canScrollRight && (
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full",
            "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md",
            "hover:bg-white/90 dark:hover:bg-slate-700/90",
            "text-slate-700 dark:text-slate-200",
            isMobile ? "h-8 w-8" : "h-7 w-7"
          )}
          onClick={() => scroll("right")}
        >
          <ChevronRight className={cn(isMobile ? "h-4 w-4" : "h-3.5 w-3.5")} />
        </Button>
      )}

      {/* 横スクロールコンテナ */}
      <div
        ref={scrollContainerRef}
        className={cn(
          "flex gap-2 lg:gap-3 overflow-x-auto scrollbar-hide",
          "scroll-smooth",
          // スクロールバーを隠すスタイル
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          // パディングでスクロールボタンのスペースを確保
          canScrollLeft && "pl-10",
          canScrollRight && "pr-10"
        )}
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {products.map((product, _index) => (
          <div
            key={product.id}
            className={cn(
              "flex-shrink-0 bg-white/20 dark:bg-white/10 backdrop-blur-md rounded-lg overflow-hidden",
              "border border-white/30 dark:border-white/10 transition-all hover:shadow-md",
              // カードの幅を固定
              isMobile ? "w-40" : "w-36 lg:w-44"
            )}
            style={{ scrollSnapAlign: "start" }}
          >
            {/* 商品画像 */}
            <div
              className={cn("relative w-full bg-gray-100/50 dark:bg-gray-800/50", isMobile ? "h-28" : "h-24 lg:h-32")}
            >
              <Image
                src={
                  product.imageUrl || `/placeholder.svg?width=200&height=128&query=${encodeURIComponent(product.name)}`
                }
                alt={product.name}
                fill
                className="object-cover"
                sizes={isMobile ? "160px" : "144px"}
              />
              <div
                className={cn(
                  "absolute top-1 right-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded font-medium text-slate-800 dark:text-slate-200",
                  isMobile ? "px-2 py-1 text-xs" : "px-1.5 py-0.5 text-[10px] lg:text-xs"
                )}
              >
                {new Intl.NumberFormat("ja-JP", {
                  style: "currency",
                  currency: product.currency,
                }).format(product.price)}
              </div>
            </div>

            {/* 商品情報 */}
            <div className={cn(isMobile ? "p-2" : "p-1.5 lg:p-2")}>
              <h4
                className={cn(
                  "font-medium text-slate-800 dark:text-slate-100 line-clamp-1",
                  isMobile ? "text-xs" : "text-[10px] lg:text-xs"
                )}
                title={product.name}
              >
                {product.name}
              </h4>
              <p
                className={cn(
                  "text-slate-600 dark:text-slate-300 line-clamp-2 mt-0.5",
                  isMobile ? "text-xs h-8" : "text-[9px] lg:text-[10px] h-6 lg:h-8"
                )}
                title={product.description}
              >
                {product.description}
              </p>
              <div className={cn("flex justify-end", isMobile ? "mt-2" : "mt-1 lg:mt-1.5")}>
                <Button
                  size="xs"
                  className={cn(
                    "bg-blue-600/80 hover:bg-blue-700/80 text-white rounded py-0",
                    isMobile ? "h-6 text-xs px-2" : "h-5 lg:h-6 text-[9px] lg:text-[10px] px-1.5 lg:px-2"
                  )}
                  onClick={() => alert(`商品詳細: ${product.name}`)}
                >
                  <ShoppingBag className={cn(isMobile ? "h-3 w-3 mr-1" : "h-2.5 w-2.5 lg:h-3 lg:w-3 mr-0.5 lg:mr-1")} />
                  詳細
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* スクロールインジケーター（ドット） */}
      {products.length > 2 && (
        <div className="flex justify-center mt-2 gap-1">
          {Array.from({ length: Math.ceil(products.length / 2) }).map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-slate-400/50 dark:bg-slate-500/50"
              style={{
                backgroundColor: index === 0 ? "rgba(59, 130, 246, 0.7)" : "rgba(148, 163, 184, 0.5)", // 簡易的なアクティブ表示
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
