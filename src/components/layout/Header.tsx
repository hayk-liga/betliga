"use client"

import React from "react"
import Link from "next/link"
import { Menu, Globe, LogOut } from "lucide-react"

import { useAuth } from "@/hooks/useAuth"
import { useSidebar } from "@/hooks/useSidebar"
import { formatCrypto } from "@/lib/formatters"

export const Header = () => {
  const { toggle } = useSidebar()
  const { user, isAuthenticated, openLogin, openSignUp, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-bg-sidebar border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={toggle}
          className="text-text-secondary hover:text-text-primary transition-colors"
        >
          <Menu size={20} />
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-bg-main font-bold text-xs">BP</span>
          </div>
          <span className="text-base font-bold text-text-primary hidden sm:block">
            Betpanda <span className="text-accent">Liga</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-text-secondary hover:text-text-primary transition-colors">
          <Globe size={18} />
        </button>

        {isAuthenticated && user ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[11px] text-text-secondary">{user.username}</span>
              <span className="text-xs font-semibold text-accent">
                {formatCrypto(user.balance, 5)} {user.currency}
              </span>
            </div>
            <button
              onClick={logout}
              className="text-text-secondary hover:text-danger transition-colors"
            >
              <LogOut size={18} />
            </button>
          </div>
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
              className="text-sm font-semibold text-accent border border-accent rounded-lg px-4 py-1.5 hover:bg-accent hover:text-bg-main transition-all"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
