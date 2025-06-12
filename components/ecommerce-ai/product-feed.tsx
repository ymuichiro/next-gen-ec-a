import { mockProductPosts } from "@/lib/mock-data"
import type { EnrichedProductPost } from "@/lib/types"
import { ProductPostCard } from "./product-post-card"
import { SearchBar } from "./search-bar"
import { FilterBar } from "./filter-bar"

export function ProductFeed() {
  const posts: EnrichedProductPost[] = mockProductPosts

  if (!posts || posts.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[300px] w-full py-8 px-4">
        <p className="text-slate-500 dark:text-slate-400">表示する投稿が現在ありません。</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* 検索バー - モバイルでサイズ調整 */}
      <header className="w-full flex justify-center sticky top-0 z-20 py-2 lg:py-3 px-1 lg:px-2 mb-3 lg:mb-4">
        <SearchBar />
      </header>

      {/* フィルターバー - モバイルで非表示またはコンパクト表示 */}
      <div className="hidden lg:block px-2 mb-4">
        <FilterBar />
      </div>

      {/* 商品グリッド - モバイルでカラム数調整 */}
      <div
        className="
        grid
        grid-cols-1        /* モバイル: 1列 */
        sm:grid-cols-2     /* 小画面: 2列 */
        lg:grid-cols-3     /* 大画面: 3列 */
        xl:grid-cols-4     /* 超大画面: 4列 */
        gap-3 lg:gap-6     /* モバイルでギャップを小さく */
        px-1 lg:px-2
      "
        style={{ gridTemplateRows: "masonry", alignItems: "start" }}
      >
        {posts.map((post) => (
          <div key={post.id} className="w-full">
            <ProductPostCard post={post} />
          </div>
        ))}
      </div>

      <div className="text-center py-6 lg:py-8">
        <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base">現在のフィードはここまでです！</p>
      </div>
    </div>
  )
}
