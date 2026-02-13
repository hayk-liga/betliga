"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Activity,
  Target,
  Clock,
  Flame,
  Sparkles,
  Radio,
  Trophy,
  Dice1,
  Gamepad2,
  Spade,
  LayoutGrid,
  Fish,
  TrendingUp,
  Crown,
  Globe,
  MessageCircle,
  Download,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/useSidebar"
import { sidebarNavItems } from "@/data/mock-nav-items"

const iconMap: Record<string, React.ReactNode> = {
  activity: <Activity size={18} />,
  target: <Target size={18} />,
  clock: <Clock size={18} />,
  flame: <Flame size={18} />,
  sparkles: <Sparkles size={18} />,
  radio: <Radio size={18} />,
  trophy: <Trophy size={18} />,
  dice: <Dice1 size={18} />,
  gamepad: <Gamepad2 size={18} />,
  spade: <Spade size={18} />,
  "layout-grid": <LayoutGrid size={18} />,
  fish: <Fish size={18} />,
  "trending-up": <TrendingUp size={18} />,
  crown: <Crown size={18} />,
}

export const Sidebar = () => {
  const { isOpen, isCollapsed, close } = useSidebar()
  const pathname = usePathname()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={close}
        />
      )}
      <aside
        className={cn(
          "fixed top-14 left-0 bottom-0 z-40 bg-bg-sidebar border-r border-border flex flex-col transition-all duration-300 overflow-y-auto hide-scrollbar",
          isCollapsed ? "w-14" : "w-[200px]",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <nav className="flex-1 px-2 py-3 flex flex-col gap-0.5">
          {sidebarNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 relative",
                  isActive
                    ? "text-accent bg-accent/5"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-main",
                  isCollapsed && "justify-center px-2",
                )}
              >
                {item.icon && (
                  <span className="flex-shrink-0 relative">
                    {iconMap[item.icon]}
                    {item.badgeDot && (
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full" />
                    )}
                  </span>
                )}
                {!isCollapsed && (
                  <span className="text-[13px] font-medium">{item.label}</span>
                )}
              </Link>
            )
          })}
        </nav>

        {!isCollapsed && (
          <div className="px-3 py-3 border-t border-border flex flex-col gap-2">
            <div className="bg-accent/10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Download size={14} className="text-accent" />
                <span className="text-xs font-semibold text-accent">Download APP</span>
              </div>
              <p className="text-[10px] text-text-secondary">Get the best experience on mobile</p>
            </div>

            <button className="flex items-center gap-2 text-[13px] text-text-secondary px-3 py-2 hover:text-text-primary transition-colors">
              <MessageCircle size={14} />
              Live Support
            </button>

            <button className="flex items-center gap-2 text-[13px] text-text-secondary border border-border rounded-lg px-3 py-2 w-full hover:border-accent/30 transition-colors">
              <Globe size={14} />
              English
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
