export type NotificationType = "bonus" | "system" | "promotion" | "vip" | "transaction"

export interface Notification {
  id: string
  title: string
  description: string
  timestamp: string
  isRead: boolean
  type: NotificationType
  avatar?: string
}
