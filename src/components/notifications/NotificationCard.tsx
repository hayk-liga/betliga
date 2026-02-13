"use client"

import React from "react"
import { Gift, Bell, Crown, ArrowLeftRight, Info } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Notification, NotificationType } from "@/types/notification"

interface NotificationCardProps {
  notification: Notification
}

const iconMap: Record<NotificationType, React.ReactNode> = {
  bonus: <Gift size={18} className="text-accent" />,
  system: <Info size={18} className="text-blue-500" />,
  promotion: <Bell size={18} className="text-yellow-500" />,
  vip: <Crown size={18} className="text-amber-500" />,
  transaction: <ArrowLeftRight size={18} className="text-green-500" />,
}

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  const timeAgo = (timestamp: string): string => {
    const diff = Date.now() - new Date(timestamp).getTime()
    const hours = Math.floor(diff / 3600000)
    if (hours < 1) return "Just now"
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl border transition-colors",
        notification.isRead
          ? "bg-bg-card border-border"
          : "bg-accent/5 border-accent/20",
      )}
    >
      <div className="w-10 h-10 rounded-full bg-bg-main flex items-center justify-center flex-shrink-0">
        {iconMap[notification.type]}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-text-primary truncate">{notification.title}</h3>
          {!notification.isRead && (
            <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
          )}
        </div>
        <p className="text-xs text-text-secondary mt-0.5 line-clamp-2">{notification.description}</p>
        <p className="text-[10px] text-text-secondary/60 mt-1">{timeAgo(notification.timestamp)}</p>
      </div>
    </div>
  )
}
