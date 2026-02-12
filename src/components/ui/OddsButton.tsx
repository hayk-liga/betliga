"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface OddsButtonProps {
  label: string
  odds: number
  isSelected?: boolean
  onClick: () => void
  className?: string
}

export const OddsButton = ({ label, odds, isSelected = false, onClick, className }: OddsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-3 py-2 rounded border transition-all duration-200",
        isSelected
          ? "bg-accent/15 border-accent text-accent"
          : "bg-bg-elevated border-border text-text-primary hover:border-accent/30",
        className,
      )}
    >
      <span className="text-[11px] text-text-secondary">{label}</span>
      <span className="text-[13px] font-bold">{odds.toFixed(2)}</span>
    </button>
  )
}
