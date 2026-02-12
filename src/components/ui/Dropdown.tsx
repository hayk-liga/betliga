"use client"

import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface DropdownOption {
  label: string
  value: string
}

interface DropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export const Dropdown = ({ options, value, onChange, placeholder = "Select...", className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const selectedLabel = options.find((o) => o.value === value)?.label

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary hover:border-accent/30 transition-colors"
      >
        <span className={selectedLabel ? "text-text-primary" : "text-text-secondary/50"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown size={16} className={cn("text-text-secondary transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="absolute z-50 top-full mt-1 w-full bg-bg-elevated border border-border rounded-lg shadow-xl max-h-60 overflow-y-auto animate-fade-in">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={cn(
                "w-full text-left px-4 py-2 text-sm hover:bg-bg-card transition-colors",
                value === option.value ? "text-accent" : "text-text-primary",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
