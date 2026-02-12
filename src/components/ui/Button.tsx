"use client"

import React, { type ButtonHTMLAttributes, type ReactNode } from "react"

import { cn } from "@/lib/utils"
import type { Size, Variant } from "@/types/common"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
  fullWidth?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent text-bg-main hover:bg-accent-hover font-semibold",
  secondary: "bg-bg-card text-text-primary border border-border hover:bg-bg-elevated",
  ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-card",
  danger: "bg-danger text-white hover:opacity-90",
}

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        props.disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
