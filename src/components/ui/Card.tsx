import React, { type ReactNode } from "react"

import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export const Card = ({ children, className, hover = false }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-bg-card rounded-xl border border-border",
        hover && "transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
        className,
      )}
    >
      {children}
    </div>
  )
}
