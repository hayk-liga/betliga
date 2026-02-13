"use client"

import React, { useState } from "react"

import { MissionHeader } from "@/components/missions/MissionHeader"
import { MissionCard } from "@/components/missions/MissionCard"
import { MissionFaq } from "@/components/missions/MissionFaq"
import { getDailyMissions, getWeeklyMissions } from "@/data/mock-missions"
import { cn } from "@/lib/utils"

type MissionTab = "daily" | "weekly"

const tabs: { label: string; value: MissionTab }[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
]

const MissionsPage = () => {
  const [activeTab, setActiveTab] = useState<MissionTab>("daily")
  const dailyMissions = getDailyMissions()
  const weeklyMissions = getWeeklyMissions()
  const missions = activeTab === "daily" ? dailyMissions : weeklyMissions

  return (
    <div className="px-4 sm:px-5 py-4">
      <MissionHeader />

      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === tab.value
                ? "bg-accent text-white"
                : "bg-bg-card border border-border text-text-secondary hover:text-text-primary",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {missions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>

      <MissionFaq />
    </div>
  )
}

export default MissionsPage
