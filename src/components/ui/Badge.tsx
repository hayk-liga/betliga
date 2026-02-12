import React from "react"

import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "live" | "new" | "hot" | "cashback" | "default"
  className?: string
}

const variantStyles = {
  live: "bg-danger text-white",
  new: "bg-accent text-bg-main",
  hot: "bg-orange-500 text-white",
  cashback: "bg-accent/15 text-accent border border-accent/30",
  default: "bg-bg-elevated text-text-secondary",
}

export const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider leading-none",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
