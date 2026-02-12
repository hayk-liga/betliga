"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface SportNavItem {
  id: string
  name: string
  icon: string
}

interface SportNavBarProps {
  sports: readonly SportNavItem[] | SportNavItem[]
  activeSport: string
  onSportChange: (sport: string) => void
}

export const SportNavBar = ({ sports, activeSport, onSportChange }: SportNavBarProps) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto hide-scrollbar">
      {sports.map((sport) => (
        <button
          key={sport.id}
          onClick={() => onSportChange(sport.id)}
          className={cn(
            "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 min-w-[50px]",
            activeSport === sport.id
              ? "bg-accent/10 text-accent"
              : "text-text-secondary hover:text-text-primary",
          )}
        >
          <span className="text-base">{sport.icon}</span>
          <span className="text-[9px] font-medium">{sport.name}</span>
        </button>
      ))}
    </div>
  )
}
