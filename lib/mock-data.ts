import type { User, Product, EnrichedProductPost } from "./types"

export const mockUsers: User[] = [
  {
    id: "user1",
    name: "Alice Wonderland",
    username: "alicew",
    avatarUrl: "/placeholder.svg?width=40&height=40",
    trustScore: 85,
  },
  {
    id: "user2",
    name: "Bob The Builder",
    username: "bobbuilds",
    avatarUrl: "/placeholder.svg?width=40&height=40",
    trustScore: 92,
  },
  {
    id: "user3",
    name: "Charlie Brown",
    username: "goodgrief",
    avatarUrl: "/placeholder.svg?width=40&height=40",
    trustScore: 78,
  },
]

export const mockProducts: Product[] = [
  {
    id: "prod1",
    name: "Eco-Friendly Water Bottle",
    description: "Stay hydrated with this stylish and sustainable water bottle.",
    price: 25.99,
    currency: "USD",
    imageUrl: "/placeholder.svg?width=600&height=400",
  },
  {
    id: "prod2",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Immerse yourself in sound with these premium headphones.",
    price: 199.5,
    currency: "USD",
    imageUrl: "/placeholder.svg?width=600&height=400",
  },
  {
    id: "prod3",
    name: "Smart Home Assistant Speaker",
    description: "Control your home with your voice. Plays music, answers questions, and more.",
    price: 99.0,
    currency: "USD",
    imageUrl: "/placeholder.svg?width=600&height=400",
  },
  {
    id: "prod4",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and ethically sourced, perfect for everyday wear.",
    price: 35.0,
    currency: "USD",
    imageUrl: "/placeholder.svg?width=600&height=400",
  },
]

export const mockProductPosts: EnrichedProductPost[] = [
  {
    id: "post1",
    userId: "user1",
    productId: "prod1",
    user: mockUsers[0],
    product: mockProducts[0],
    caption:
      "Just got this eco-friendly water bottle! 🌿💧 So important to stay hydrated and reduce plastic waste. Love the design and how it keeps my water cold all day. #SustainableLiving #EcoFriendly",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    likes: 120,
    commentsCount: 15,
  },
  {
    id: "post2",
    userId: "user2",
    productId: "prod2",
    user: mockUsers[1],
    product: mockProducts[1],
    caption:
      "My new productivity hack: these noise-cancelling headphones! 🎧🎶 Perfect for deep work sessions or just enjoying my favorite tunes without distractions. Sound quality is incredible! #TechGadget #MusicLover",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(), // 1 day ago
    likes: 250,
    commentsCount: 30,
  },
  {
    id: "post3",
    userId: "user3",
    productId: "prod3",
    user: mockUsers[2],
    product: mockProducts[2],
    caption:
      "Finally upgraded my living room with this smart speaker. 🤖💡 It's amazing how much it can do. Plus, it looks pretty sleek. What are your favorite smart home gadgets? #SmartHome #Tech",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
    likes: 95,
    commentsCount: 8,
  },
  {
    id: "post4",
    userId: "user1",
    productId: "prod4",
    user: mockUsers[0],
    product: mockProducts[3],
    caption:
      "Loving this new organic cotton tee! So soft and comfy, and I feel good knowing it's ethically made. Definitely a new wardrobe staple. ✨ #EthicalFashion #OrganicCotton",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    likes: 75,
    commentsCount: 5,
  },
]
