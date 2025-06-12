export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  trustScore: number; // e.g., 0-100
  username: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  currency: string; // e.g., "USD"
}

export interface ProductPost {
  id: string;
  userId: string;
  productId: string;
  caption: string;
  createdAt: string; // ISO date string
  likes: number;
  commentsCount: number;
}

// Combined type for easier use in components
export interface EnrichedProductPost extends ProductPost {
  user: User;
  product: Product;
}

export interface SimilarProductSuggestion {
  name: string;
  description: string;
  imageUrl?: string; // Optional, AI might not always provide this
}

// --- 新しいチャット構造体 ---
export type ChatContent = { type: "text"; text: string } | { type: "image"; imageUrl: string; mimeType?: string };

export interface ChatMessageModel {
  id: string;
  sender: "user" | "assistant";
  content: ChatContent[];
  timestamp: Date;
  products?: any[];
  showAsGrid?: boolean;
}
