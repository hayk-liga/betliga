"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { mockCryptoPrices } from "@/data/mock-crypto-prices"

interface CryptoTickerProps {
  className?: string
}

export const CryptoTicker = ({ className }: CryptoTickerProps) => {
  return (
    <div className={cn("py-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm">⚡</span>
        <h3 className="text-sm font-bold text-text-primary">Crypto Prices</h3>
      </div>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-2">
          {mockCryptoPrices.slice(0, 8).map((coin) => (
            <div
              key={coin.symbol}
              className="flex items-center gap-2 bg-bg-card border border-border rounded-full px-3 py-1.5 whitespace-nowrap flex-shrink-0"
            >
              <span className="text-xs">{coin.icon}</span>
              <span className="text-xs text-text-secondary">${coin.price < 1 ? coin.price.toFixed(4) : coin.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              <span
                className={cn(
                  "text-xs font-medium",
                  coin.change24h >= 0 ? "text-accent" : "text-danger",
                )}
              >
                {coin.change24h >= 0 ? "" : ""}{coin.change24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
