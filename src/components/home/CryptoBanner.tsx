"use client"

import React from "react"
import { Download } from "lucide-react"

const cryptoIcons = ["₿", "Ξ", "₮", "▼", "✕", "◎", "✦"]

export const CryptoBanner = () => {
  return (
    <div className="bg-bg-card rounded-xl border border-border px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-text-secondary">⚡</span>
        <p className="text-base sm:text-lg font-bold text-text-primary">
          Supporting <span className="text-accent">30+</span> Crypto Currencies
        </p>
      </div>
      <div className="flex items-center gap-3">
        {cryptoIcons.map((icon, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full border border-border bg-bg-elevated flex items-center justify-center text-text-secondary text-sm hover:border-accent/30 transition-colors"
          >
            {icon}
          </div>
        ))}
        <button className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-bg-main text-sm font-semibold rounded-lg px-4 py-2 ml-2 transition-colors">
          <Download size={14} />
          Deposit
        </button>
      </div>
    </div>
  )
}
