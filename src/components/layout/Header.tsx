"use client"

import React from "react"
import Link from "next/link"
import { PanelLeftClose, PanelLeftOpen, Plus } from "lucide-react"

import { useAuth } from "@/hooks/useAuth"
import { useSidebar } from "@/hooks/useSidebar"
import { ROUTES } from "@/constants/routes"
import { CryptoBalanceDropdown } from "@/components/layout/CryptoBalanceDropdown"
import { NotificationBell } from "@/components/layout/NotificationBell"
import { UserDropdown } from "@/components/layout/UserDropdown"

export const Header = () => {
  const { toggle, isCollapsed } = useSidebar()
  const { isAuthenticated, openLogin, openSignUp } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-bg-sidebar border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="text-text-secondary hover:text-text-primary transition-colors"
        >
          {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">DL</span>
          </div>
          <span className="text-base font-bold text-text-primary hidden sm:block">
            Dice <span className="text-accent">Liga</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <CryptoBalanceDropdown />
            <Link
              href={ROUTES.DEPOSIT}
              className="w-8 h-8 bg-accent hover:bg-accent-hover rounded-lg flex items-center justify-center transition-colors"
            >
              <Plus size={16} className="text-white" />
            </Link>
            <NotificationBell />
            <UserDropdown />
          </>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={openLogin}
              className="text-sm text-text-primary hover:text-accent transition-colors px-3 py-1.5"
            >
              Login
            </button>
            <button
              onClick={openSignUp}
              className="text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg px-4 py-1.5 transition-all"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
