"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface SportPill {
  id: string
  name: string
  count?: number
}

interface SportPillsProps {
  sports: SportPill[]
  activeSport: string
  onSportChange: (sport: string) => void
}

export const SportPills = ({ sports, activeSport, onSportChange }: SportPillsProps) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto hide-scrollbar">
      {sports.map((sport) => (
        <button
          key={sport.id}
          onClick={() => onSportChange(sport.id)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border",
            activeSport === sport.id
              ? "bg-accent text-bg-main border-accent"
              : "bg-transparent text-text-secondary border-border hover:border-accent/30",
          )}
        >
          {sport.name}
          {sport.count !== undefined && sport.count > 0 && (
            <span className="ml-1 opacity-60">({sport.count})</span>
          )}
        </button>
      ))}
    </div>
  )
}
