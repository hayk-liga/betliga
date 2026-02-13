import type { ActivityPromo } from "@/types/activity"

export const mockActivityPromos: ActivityPromo[] = [
  {
    id: "a1",
    title: "Sign-Up Bonus",
    description: "Get up to $1,000 welcome bonus on your first deposit",
    icon: "gift",
    gradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
    href: "/promotions",
  },
  {
    id: "a2",
    title: "Easy Tasks",
    description: "Complete simple tasks and earn rewards daily",
    icon: "target",
    gradient: "linear-gradient(135deg, #EC4899, #BE185D)",
    href: "/missions",
  },
  {
    id: "a3",
    title: "Weekly Cashback",
    description: "Get up to 25% cashback on your weekly losses",
    icon: "refresh",
    gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
    href: "/promotions",
  },
  {
    id: "a4",
    title: "VIP Rewards",
    description: "Unlock exclusive VIP benefits and higher bonuses",
    icon: "crown",
    gradient: "linear-gradient(135deg, #10B981, #059669)",
    href: "/vip-club",
  },
  {
    id: "a5",
    title: "Refer & Earn",
    description: "Invite friends and earn BTC for every referral",
    icon: "users",
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    href: "/vip-benefits",
  },
  {
    id: "a6",
    title: "Daily Spin",
    description: "Spin the wheel every day for a chance to win big",
    icon: "loader",
    gradient: "linear-gradient(135deg, #EF4444, #B91C1C)",
    href: "/promotions",
  },
]
