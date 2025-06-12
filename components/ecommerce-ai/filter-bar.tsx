"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X } from "lucide-react"

const popularUsers = [
  { id: "user1", name: "Alice Wonderland" },
  { id: "user2", name: "Bob The Builder" },
  { id: "user3", name: "Charlie Brown" },
]
const priceRanges = [
  { id: "range1", label: "$0 - $25" },
  { id: "range2", label: "$25 - $50" },
  { id: "range3", label: "$50 - $100" },
  { id: "range4", label: "$100+" },
]
const colors = [
  { id: "color1", name: "レッド" },
  { id: "color2", name: "ブルー" },
  { id: "color3", name: "グリーン" },
  { id: "color4", name: "ブラック" },
  { id: "color5", name: "ホワイト" },
]
const reviewRatings = [
  { id: "rating1", label: "★★★★★ (5)" },
  { id: "rating2", label: "★★★★☆ (4以上)" },
  { id: "rating3", label: "★★★☆☆ (3以上)" },
]

export function FilterBar() {
  const [selectedUser, setSelectedUser] = useState<string>("")
  const [selectedPrice, setSelectedPrice] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedReview, setSelectedReview] = useState<string>("")

  const clearFilters = () => {
    setSelectedUser("")
    setSelectedPrice("")
    setSelectedColor("")
    setSelectedReview("")
    alert("フィルターがクリアされました。実際の絞り込み処理は未実装です。")
  }

  const hasActiveFilters = selectedUser || selectedPrice || selectedColor || selectedReview

  return (
    <div className="p-3 mb-4 glass-card dark:glass-card-dark rounded-2xl">
      {/* True glassmorphism card effect */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
          <SlidersHorizontal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-md font-semibold">フィルターオプション</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-xs h-7 text-sky-600 dark:text-sky-400 hover:bg-white/20 dark:hover:bg-white/10"
          >
            <X className="h-3 w-3 mr-1" />
            クリア
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          {
            label: "人気のユーザー",
            value: selectedUser,
            setter: setSelectedUser,
            options: popularUsers,
            placeholder: "ユーザーを選択",
          },
          {
            label: "価格帯",
            value: selectedPrice,
            setter: setSelectedPrice,
            options: priceRanges.map((r) => ({ id: r.id, name: r.label })),
            placeholder: "価格帯を選択",
          },
          {
            label: "色",
            value: selectedColor,
            setter: setSelectedColor,
            options: colors,
            placeholder: "色を選択",
          },
          {
            label: "レビュー",
            value: selectedReview,
            setter: setSelectedReview,
            options: reviewRatings.map((r) => ({ id: r.id, name: r.label })),
            placeholder: "評価を選択",
          },
        ].map((filter) => (
          <div key={filter.label}>
            <Label
              htmlFor={`filter-${filter.label}`}
              className="text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {filter.label}
            </Label>
            <Select value={filter.value} onValueChange={filter.setter}>
              <SelectTrigger
                id={`filter-${filter.label}`}
                className="w-full h-9 text-xs bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/20 rounded-lg backdrop-blur-sm"
              >
                <SelectValue placeholder={filter.placeholder} />
              </SelectTrigger>
              <SelectContent className="glass-morphism dark:glass-morphism-dark rounded-lg">
                {filter.options.map((opt) => (
                  <SelectItem
                    key={opt.id}
                    value={opt.id}
                    className="text-xs hover:bg-white/20 dark:hover:bg-white/10 focus:bg-blue-500/20 dark:focus:bg-blue-600/30"
                  >
                    {opt.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    </div>
  )
}
