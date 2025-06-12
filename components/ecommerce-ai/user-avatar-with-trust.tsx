import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import type { User } from "@/lib/types"

interface UserAvatarWithTrustProps {
  user: User
  size?: "sm" | "md" | "lg"
}

export function UserAvatarWithTrust({ user, size = "md" }: UserAvatarWithTrustProps) {
  const avatarSizeClass = size === "sm" ? "h-8 w-8" : size === "md" ? "h-10 w-10" : "h-12 w-12"
  const nameSizeClass = size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"

  const getTrustBadgeVariant = (score: number): "default" | "secondary" | "destructive" | "outline" => {
    if (score >= 90) return "default"
    if (score >= 75) return "secondary"
    return "outline"
  }

  const getTrustBadgeClasses = (score: number): string => {
    if (score >= 90) return "bg-green-500/80 border-green-400/50 text-white"
    if (score >= 75) return "bg-sky-500/70 border-sky-400/50 text-white"
    return "bg-slate-400/50 border-slate-300/50 text-slate-700 dark:text-slate-200"
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="flex items-center space-x-3">
      <Avatar className={`${avatarSizeClass} border-2 border-white/50 dark:border-slate-600/50 shadow-md`}>
        <AvatarImage src={user.avatarUrl || "/placeholder.svg"} alt={user.name} />
        <AvatarFallback className="bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-200">
          {getInitials(user.name)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className={`font-semibold ${nameSizeClass} text-slate-800 dark:text-slate-100`}>{user.name}</p>
        <div className="flex items-center space-x-1.5 mt-0.5">
          <p className={`text-xs text-slate-600 dark:text-slate-400`}>@{user.username}</p>
          <Badge
            // variant={getTrustBadgeVariant(user.trustScore)} // Using custom classes instead
            className={`text-xs px-1.5 py-0.5 rounded-md border ${getTrustBadgeClasses(user.trustScore)}`}
          >
            Trust: {user.trustScore}
          </Badge>
        </div>
      </div>
    </div>
  )
}
