"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { useAuth } from "@/hooks/useAuth"
import { formatCrypto } from "@/lib/formatters"

export const CryptoBalanceDropdown = () => {
  const { user } = useAuth()
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

  const primary = user.balances[0]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-bg-main border border-border rounded-lg px-3 py-1.5 hover:border-accent/30 transition-colors"
      >
        <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: primary.color }}>
          {primary.symbol}
        </span>
        <span className="text-sm font-semibold text-text-primary">
          {formatCrypto(primary.balance, 2)}
        </span>
        <span className="text-[10px] text-text-secondary">{primary.currency}</span>
        <ChevronDown size={14} className={cn("text-text-secondary transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-56 bg-bg-card border border-border rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="p-2">
            {user.balances.map((b) => (
              <div
                key={b.currency}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-bg-main transition-colors"
              >
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style={{ backgroundColor: b.color }}>
                  {b.symbol}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-primary">{b.currency}</p>
                </div>
                <p className="text-sm font-semibold text-text-primary">{formatCrypto(b.balance, b.currency === "USDT" ? 2 : 5)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
