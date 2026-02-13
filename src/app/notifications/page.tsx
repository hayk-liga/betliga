"use client"

import React from "react"
import { Bell } from "lucide-react"

import { NotificationCard } from "@/components/notifications/NotificationCard"
import { mockNotifications } from "@/data/mock-notifications"

const NotificationsPage = () => {
  return (
    <div className="px-4 sm:px-5 py-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Bell size={24} className="text-accent" />
          <h1 className="text-lg font-bold text-text-primary">Notifications</h1>
        </div>
        <button className="text-xs text-accent hover:text-accent-hover transition-colors font-medium">
          Mark All as Read
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {mockNotifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  )
}

export default NotificationsPage
