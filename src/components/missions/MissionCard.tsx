"use client"

import React from "react"

import type { Mission } from "@/types/mission"

interface MissionCardProps {
  mission: Mission
}

export const MissionCard = ({ mission }: MissionCardProps) => {
  const progressPercent = Math.round((mission.progress / mission.target) * 100)
  const isCompleted = mission.status === "completed" || mission.status === "claimed"

  return (
    <div className="bg-bg-card border border-border rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-text-primary">{mission.title}</h3>
          <p className="text-xs text-text-secondary mt-0.5">{mission.description}</p>
        </div>
        <div className="text-right ml-3">
          <p className="text-sm font-bold text-accent">+{mission.reward}</p>
          <p className="text-[10px] text-text-secondary">{mission.rewardCurrency}</p>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between text-[11px] mb-1">
          <span className="text-text-secondary">{mission.progress}/{mission.target}</span>
          <span className="text-text-secondary">{progressPercent}%</span>
        </div>
        <div className="w-full h-1.5 bg-bg-main rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <button
        disabled={!isCompleted}
        className={`w-full py-2 rounded-lg text-xs font-semibold transition-colors ${
          isCompleted
            ? "bg-accent text-white hover:bg-accent-hover"
            : "bg-bg-main text-text-secondary cursor-not-allowed"
        }`}
      >
        {mission.status === "claimed" ? "Claimed" : isCompleted ? "Collect" : "In Progress"}
      </button>
    </div>
  )
}
