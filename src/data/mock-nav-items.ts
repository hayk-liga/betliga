import type { NavItem } from "@/types/common"

export const sidebarNavItems: NavItem[] = [
  {
    label: "Casino",
    href: "/casino",
    icon: "dice",
    children: [
      { label: "Lobby", href: "/casino" },
      { label: "Originals", href: "/casino?category=originals" },
      { label: "Slots", href: "/casino?category=slots" },
      { label: "Table Games", href: "/casino?category=table-games" },
      { label: "Jackpot", href: "/casino?category=jackpot" },
    ],
  },
  {
    label: "Live Casino",
    href: "/live-casino",
    icon: "tv",
    children: [
      { label: "Lobby", href: "/live-casino" },
      { label: "Game Shows", href: "/live-casino?category=game-shows" },
      { label: "Blackjack", href: "/live-casino?category=blackjack" },
      { label: "Roulette", href: "/live-casino?category=roulette" },
    ],
  },
  {
    label: "Sports",
    href: "/sports",
    icon: "trophy",
    children: [
      { label: "Highlights", href: "/sports" },
      { label: "Live", href: "/sports?tab=live" },
      { label: "Soccer", href: "/sports?sport=soccer" },
      { label: "Basketball", href: "/sports?sport=basketball" },
    ],
  },
  {
    label: "Esports",
    href: "/esports",
    icon: "gamepad-2",
    children: [
      { label: "CS2", href: "/esports?sport=cs2" },
      { label: "League of Legends", href: "/esports?sport=lol" },
      { label: "Dota 2", href: "/esports?sport=dota2" },
    ],
  },
  {
    label: "Promotions",
    href: "/promotions",
    icon: "gift",
  },
]

export const footerLinks = {
  games: [
    { label: "Casino", href: "/casino" },
    { label: "Live Casino", href: "/live-casino" },
    { label: "Originals", href: "/casino?category=originals" },
    { label: "Table Games", href: "/casino?category=table-games" },
  ],
  platform: [
    { label: "Sports", href: "/sports" },
    { label: "Esports", href: "/esports" },
    { label: "Promotions", href: "/promotions" },
    { label: "VIP Program", href: "/promotions" },
  ],
  community: [
    { label: "Blog", href: "#" },
    { label: "Forum", href: "#" },
    { label: "Affiliates", href: "#" },
    { label: "Help Center", href: "#" },
  ],
}
