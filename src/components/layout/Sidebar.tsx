"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import {
  Dice1 as DiceIcon,
  Tv,
  Trophy,
  Gamepad2,
  Gift,
  ChevronDown,
  ChevronRight,
  Globe,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/useSidebar"
import { sidebarNavItems } from "@/data/mock-nav-items"
import { CountdownTimer } from "@/components/ui/CountdownTimer"
import type { NavItem } from "@/types/common"

const iconMap: Record<string, React.ReactNode> = {
  dice: <DiceIcon size={18} />,
  tv: <Tv size={18} />,
  trophy: <Trophy size={18} />,
  "gamepad-2": <Gamepad2 size={18} />,
  gift: <Gift size={18} />,
}

const cashbackEndDate = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString()

const NavItemComponent = ({
  item,
  isCollapsed,
  pathname,
  currentUrl,
}: {
  item: NavItem
  isCollapsed: boolean
  pathname: string
  currentUrl: string
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <Link
        href={item.href}
        onClick={(e) => {
          if (hasChildren && !isCollapsed) {
            e.preventDefault()
            setIsExpanded(!isExpanded)
          }
        }}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
          isActive
            ? "text-accent"
            : "text-text-secondary hover:text-text-primary",
          isCollapsed && "justify-center px-2",
        )}
      >
        {item.icon && (
          <span className="flex-shrink-0">{iconMap[item.icon]}</span>
        )}
        {!isCollapsed && (
          <>
            <span className="text-[13px] font-medium flex-1">{item.label}</span>
            {hasChildren && (
              <span className="text-text-secondary/50">
                {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </span>
            )}
          </>
        )}
      </Link>
      {hasChildren && isExpanded && !isCollapsed && (
        <div className="ml-9 mt-0.5 flex flex-col gap-0.5 border-l border-border/50 pl-3">
          {item.children?.map((child) => {
            const isChildActive = child.href.includes("?")
              ? currentUrl === child.href
              : pathname === child.href && !currentUrl.includes("?")

            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "text-[13px] py-1.5 rounded transition-colors",
                  isChildActive
                    ? "text-accent font-medium"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {child.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export const Sidebar = () => {
  const { isOpen, isCollapsed, close } = useSidebar()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentUrl = searchParams.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname

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
        {!isCollapsed && (
          <div className="px-4 pt-4 pb-3">
            <p className="text-[11px] text-text-secondary font-medium mb-2">Weekly Cashback in</p>
            <CountdownTimer targetDate={cashbackEndDate} compact />
          </div>
        )}

        <nav className="flex-1 px-2 py-1 flex flex-col gap-0.5">
          {sidebarNavItems.map((item) => (
            <NavItemComponent
              key={item.href}
              item={item}
              isCollapsed={isCollapsed}
              pathname={pathname}
              currentUrl={currentUrl}
            />
          ))}
        </nav>

        {!isCollapsed && (
          <div className="px-3 py-3">
            <button className="flex items-center gap-2 text-[13px] text-text-secondary border border-border rounded-lg px-3 py-2 w-full hover:border-accent/30 transition-colors">
              <Globe size={14} />
              English (en)
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
