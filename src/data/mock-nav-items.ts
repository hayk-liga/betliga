import type { NavItem } from "@/types/common"

export const sidebarNavItems: NavItem[] = [
  { label: "Activity Center", href: "/activity-center", icon: "activity" },
  { label: "Missions", href: "/missions", icon: "target", badgeDot: true },
  { label: "Recent Games", href: "/recent-games", icon: "clock" },
  { label: "HOT", href: "/hot", icon: "flame" },
  { label: "New Games", href: "/new-games", icon: "sparkles" },
  { label: "Live Entertainment", href: "/live-entertainment", icon: "radio" },
  { label: "Sportsbook", href: "/sportsbook", icon: "trophy" },
  { label: "Slots", href: "/slots", icon: "dice" },
  { label: "Electronic Games", href: "/electronic-games", icon: "gamepad" },
  { label: "Poker", href: "/poker", icon: "spade" },
  { label: "Table Games", href: "/table-games", icon: "layout-grid" },
  { label: "Fishing", href: "/fishing", icon: "fish" },
  { label: "Futures Trading", href: "/futures-trading", icon: "trending-up" },
  { label: "VIP Club", href: "/vip-club", icon: "crown" },
]

export const footerLinks = {
  platform: [
    { label: "Promotions", href: "/promotions" },
    { label: "VIP Club", href: "/vip-club" },
    { label: "Affiliates", href: "#" },
    { label: "Help Center", href: "#" },
  ],
  about: [
    { label: "About Us", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Responsible Gaming", href: "#" },
  ],
}
