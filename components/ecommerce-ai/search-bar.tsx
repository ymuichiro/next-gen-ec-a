import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="flex w-full max-w-xl items-center space-x-2 p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full shadow-lg border border-white/30 dark:border-slate-700/30">
      <Input
        type="search"
        placeholder="AIで商品を検索..."
        className="flex-grow bg-transparent border-none focus:ring-0 text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="text-sky-600 dark:text-sky-400 hover:bg-white/30 dark:hover:bg-slate-700/50 rounded-full"
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
  )
}
