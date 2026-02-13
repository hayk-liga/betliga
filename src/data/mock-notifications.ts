import type { Notification } from "@/types/notification"

export const mockNotifications: Notification[] = [
  {
    id: "n1",
    title: "Welcome Bonus Activated",
    description: "Your 100% welcome bonus has been credited to your account. Start playing now!",
    timestamp: "2024-01-15T10:30:00Z",
    isRead: false,
    type: "bonus",
  },
  {
    id: "n2",
    title: "Weekly Cashback Ready",
    description: "Your weekly cashback of $12.50 is ready to claim. Don't miss out!",
    timestamp: "2024-01-15T09:00:00Z",
    isRead: false,
    type: "promotion",
  },
  {
    id: "n3",
    title: "VIP Level Upgrade",
    description: "Congratulations! You've been upgraded to Silver VIP tier. Enjoy enhanced rewards!",
    timestamp: "2024-01-14T18:00:00Z",
    isRead: true,
    type: "vip",
  },
  {
    id: "n4",
    title: "Deposit Confirmed",
    description: "Your deposit of 0.05 BTC has been confirmed and credited to your account.",
    timestamp: "2024-01-14T15:30:00Z",
    isRead: true,
    type: "transaction",
  },
  {
    id: "n5",
    title: "New Games Available",
    description: "10 new slot games have been added! Check out the latest releases.",
    timestamp: "2024-01-14T12:00:00Z",
    isRead: true,
    type: "system",
  },
  {
    id: "n6",
    title: "Mission Completed",
    description: "You've completed the 'Place 5 Bets' daily mission. Claim your reward!",
    timestamp: "2024-01-13T20:00:00Z",
    isRead: true,
    type: "bonus",
  },
  {
    id: "n7",
    title: "Scheduled Maintenance",
    description: "Scheduled maintenance on Jan 20 from 2:00 AM to 4:00 AM UTC.",
    timestamp: "2024-01-13T10:00:00Z",
    isRead: true,
    type: "system",
  },
  {
    id: "n8",
    title: "Free Spins Credited",
    description: "You've received 50 free spins on Sweet Bonanza. Valid for 24 hours!",
    timestamp: "2024-01-12T16:00:00Z",
    isRead: true,
    type: "bonus",
  },
]

export const getUnreadCount = (): number =>
  mockNotifications.filter((n) => !n.isRead).length
