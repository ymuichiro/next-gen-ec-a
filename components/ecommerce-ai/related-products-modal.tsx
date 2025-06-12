"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2 } from "lucide-react"
import type { Product, SimilarProductSuggestion } from "@/lib/types"
import Image from "next/image"

interface RelatedProductsModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  sourceProduct: Product | null
}

export function RelatedProductsModal({ isOpen, onOpenChange, sourceProduct }: RelatedProductsModalProps) {
  const [similarProducts, setSimilarProducts] = useState<SimilarProductSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (isOpen && sourceProduct) {
      const fetchSimilarProducts = async () => {
        setIsLoading(true)
        setError(null)
        setSimilarProducts([])
        try {
          const response = await fetch("/api/ai/find-similar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              productName: sourceProduct.name,
              productDescription: sourceProduct.description,
            }),
          })
          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || `API Error: ${response.statusText}`)
          }
          const data = await response.json()
          setSimilarProducts(data.similarProducts || [])
        } catch (err) {
          setError(err instanceof Error ? err.message : "An unknown error occurred.")
          console.error("Failed to fetch similar products:", err)
        } finally {
          setIsLoading(false)
        }
      }
      fetchSimilarProducts()
    }
  }, [isOpen, sourceProduct])

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-xl shadow-2xl text-slate-800 dark:text-slate-100">
        <DialogHeader>
          <DialogTitle className="text-slate-900 dark:text-slate-50">Similar to {sourceProduct?.name}</DialogTitle>
          <DialogDescription className="text-slate-700 dark:text-slate-300">
            AI-powered suggestions you might like.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {isLoading && (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-sky-500 dark:text-sky-400" />
              <p className="ml-2 text-slate-700 dark:text-slate-300">Finding similar products...</p>
            </div>
          )}
          {error && (
            <div className="text-red-100 bg-red-500/30 p-3 rounded-md flex items-center border border-red-500/50">
              <AlertCircle className="h-5 w-5 mr-2 text-red-400" />
              <p className="text-red-200">Error: {error}</p>
            </div>
          )}
          {!isLoading && !error && similarProducts.length === 0 && (
            <p className="text-center text-slate-500 dark:text-slate-400 py-8">No similar products found.</p>
          )}
          {!isLoading && !error && similarProducts.length > 0 && (
            <div className="space-y-4">
              {similarProducts.map((product, index) => (
                <Card
                  key={index}
                  className="bg-white/30 dark:bg-slate-700/30 backdrop-blur-md border border-white/20 dark:border-slate-600/30"
                >
                  <CardHeader>
                    <CardTitle className="text-slate-800 dark:text-slate-100">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col sm:flex-row gap-4">
                    <Image
                      src={
                        product.imageUrl ||
                        `/placeholder.svg?width=100&height=100&query=${encodeURIComponent(product.name) || "/placeholder.svg"}`
                      }
                      alt={product.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover border border-white/20 dark:border-slate-600/30"
                    />
                    <CardDescription className="text-slate-700 dark:text-slate-300">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sky-500/50 text-sky-600 dark:text-sky-400 hover:bg-sky-500/10 dark:hover:bg-sky-400/10"
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
