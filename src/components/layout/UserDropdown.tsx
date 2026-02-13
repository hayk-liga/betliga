"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Plus,
  Minus,
  Receipt,
  ArrowLeftRight,
  Crown,
  Award,
  Users,
  Activity,
  Target,
  Globe,
  Settings,
  LogOut,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useAuth } from "@/hooks/useAuth"
import { ROUTES } from "@/constants/routes"

interface MenuItem {
  label: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
  danger?: boolean
}

export const UserDropdown = () => {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  if (!user) return null

  const menuItems: MenuItem[] = [
    { label: "Top-Up", icon: <Plus size={16} />, href: ROUTES.DEPOSIT },
    { label: "Withdraw", icon: <Minus size={16} />, href: ROUTES.WITHDRAW },
    { label: "My Bets", icon: <Receipt size={16} />, href: ROUTES.MY_BETS },
    { label: "Transactions", icon: <ArrowLeftRight size={16} />, href: ROUTES.TRANSACTIONS },
    { label: "VIP Overview", icon: <Crown size={16} />, href: ROUTES.VIP_CLUB },
    { label: "VIP Benefits", icon: <Award size={16} />, href: ROUTES.VIP_BENEFITS },
    { label: "User Management", icon: <Users size={16} />, href: ROUTES.USER_MANAGEMENT },
    { label: "Activity Center", icon: <Activity size={16} />, href: ROUTES.ACTIVITY_CENTER },
    { label: "Missions", icon: <Target size={16} />, href: ROUTES.MISSIONS },
    { label: "Language", icon: <Globe size={16} /> },
    { label: "Account Settings", icon: <Settings size={16} />, href: ROUTES.ACCOUNT_SETTINGS },
    { label: "Logout", icon: <LogOut size={16} />, onClick: logout, danger: true },
  ]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-sm hover:bg-accent/20 transition-colors"
      >
        {user.username.charAt(0).toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-56 bg-bg-card border border-border rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="px-3 py-2 border-b border-border">
            <p className="text-sm font-semibold text-text-primary">{user.username}</p>
            <p className="text-xs text-text-secondary">{user.email}</p>
          </div>
          <div className="py-1">
            {menuItems.map((item) => {
              const className = cn(
                "flex items-center gap-3 px-3 py-2 text-sm w-full transition-colors",
                item.danger
                  ? "text-danger hover:bg-danger/5"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-main",
              )

              if (item.href) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={className}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )
              }

              return (
                <button
                  key={item.label}
                  className={className}
                  onClick={() => {
                    item.onClick?.()
                    setIsOpen(false)
                  }}
                >
                  {item.icon}
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
