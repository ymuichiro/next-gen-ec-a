import { mockProductPosts } from "@/lib/mock-data"
import type { EnrichedProductPost } from "@/lib/types"
import { ProductPostCard } from "./product-post-card"
import { SearchBar } from "./search-bar"

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
    // Removed outer background, as page.tsx and layout.tsx handle it.
    // The ProductFeed itself doesn't need a background if its parent provides one.
    // It's now primarily a container for posts and the search bar.
    <div className="w-full space-y-6">
      <header className="w-full flex justify-center sticky top-0 z-10 py-3 px-2">
        <SearchBar />
      </header>
      <div className="px-2 space-y-6">
        {" "}
        {/* Added padding for posts within the scrollable area */}
        {posts.map((post) => (
          <ProductPostCard key={post.id} post={post} />
        ))}
        <div className="text-center py-8">
          <p className="text-slate-500 dark:text-slate-400">現在のフィードはここまでです！</p>
        </div>
      </div>
    </div>
  )
}
