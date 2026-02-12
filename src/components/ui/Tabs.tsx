"use client"

import React from "react"

import { cn } from "@/lib/utils"
import type { TabItem } from "@/types/common"

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onChange: (value: string) => void
  className?: string
}

export const Tabs = ({ tabs, activeTab, onChange, className }: TabsProps) => {
  return (
    <div className={cn("flex gap-1 overflow-x-auto hide-scrollbar", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border",
            activeTab === tab.value
              ? "bg-accent text-bg-main border-accent"
              : "text-text-secondary border-border hover:text-text-primary hover:border-accent/30",
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-1 opacity-70">({tab.count})</span>
          )}
        </button>
      ))}
    </div>
  )
}
