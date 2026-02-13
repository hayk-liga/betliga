"use client"

import React from "react"
import { Target } from "lucide-react"

export const MissionHeader = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-bg-card border border-border rounded-xl p-5 mb-5">
      <div className="flex items-center gap-3 mb-2">
        <Target size={24} className="text-accent" />
        <div>
          <h1 className="text-lg font-bold text-text-primary">Missions</h1>
          <p className="text-xs text-text-secondary">{today}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <div className="bg-accent/10 rounded-lg px-4 py-2">
          <p className="text-[10px] text-text-secondary">Accumulated Rewards</p>
          <p className="text-lg font-bold text-accent">$126.50</p>
        </div>
      </div>
    </div>
  )
}
