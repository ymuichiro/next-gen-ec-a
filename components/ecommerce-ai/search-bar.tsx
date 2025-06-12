import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex w-full max-w-xl items-center space-x-2 p-2 glass-morphism dark:glass-morphism-dark rounded-full shadow-lg">
      {/* True glassmorphism effect */}
      <Input
        type="search"
        placeholder="AIで商品を検索..."
        className="flex-grow bg-transparent border-none focus:ring-0 text-slate-700 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400 text-sm"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="text-blue-600 dark:text-blue-400 hover:bg-white/20 dark:hover:bg-white/10 rounded-full"
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
}
