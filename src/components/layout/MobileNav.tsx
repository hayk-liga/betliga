"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Dice1, Tv, Trophy, Gift } from "lucide-react"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Casino", href: "/casino", icon: Dice1 },
  { label: "Live", href: "/live-casino", icon: Tv },
  { label: "Sports", href: "/sports", icon: Trophy },
  { label: "Promos", href: "/promotions", icon: Gift },
]

export const MobileNav = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-bg-sidebar border-t border-border md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-12">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-2 py-1 transition-colors",
                isActive ? "text-accent" : "text-text-secondary",
              )}
            >
              <Icon size={18} />
              <span className="text-[9px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
