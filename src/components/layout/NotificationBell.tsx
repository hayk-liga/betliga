"use client"

import React from "react"
import Link from "next/link"
import { Bell } from "lucide-react"

import { getUnreadCount } from "@/data/mock-notifications"
import { ROUTES } from "@/constants/routes"

export const NotificationBell = () => {
  const unreadCount = getUnreadCount()

  return (
    <Link
      href={ROUTES.NOTIFICATIONS}
      className="relative text-text-secondary hover:text-text-primary transition-colors p-1"
    >
      <Bell size={20} />
      {unreadCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold text-white">
          {unreadCount}
        </span>
      )}
    </Link>
  )
}
