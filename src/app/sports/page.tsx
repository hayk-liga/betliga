"use client"

import React, { useState, useMemo, useCallback } from "react"

import { SportNavBar } from "@/components/sports/SportNavBar"
import { SportPills } from "@/components/sports/SportPills"
import { MatchGrid } from "@/components/sports/MatchGrid"
import { Betslip } from "@/components/sports/Betslip"
import { HotCombos } from "@/components/sports/HotCombos"
import { SPORT_CATEGORIES } from "@/constants/sport-categories"
import { getSportsMatches, getLiveMatches } from "@/data/mock-matches"
import type { BetSelection } from "@/types/match"
import type { TabItem } from "@/types/common"
import { Tabs } from "@/components/ui/Tabs"

const mainTabs: TabItem[] = [
  { label: "HIGHLIGHTS", value: "highlights" },
  { label: "EVENT BUILDER", value: "event-builder" },
  { label: "BETS FEED", value: "bets-feed" },
]

const SportsPage = () => {
  const [activeTab, setActiveTab] = useState("highlights")
  const [activeSport, setActiveSport] = useState("all")
  const [selectedBets, setSelectedBets] = useState<BetSelection[]>([])

  const sportsMatches = getSportsMatches()
  const liveMatches = getLiveMatches()

  const sportPills = [
    { id: "all", name: "All Sports", count: sportsMatches.length },
    ...SPORT_CATEGORIES.map((s) => ({
      id: s.id,
      name: s.name,
      count: sportsMatches.filter((m) => m.sport === s.id).length,
    })).filter((s) => s.count > 0),
  ]

  const filteredMatches = useMemo(() => {
    if (activeSport === "all") return sportsMatches
    return sportsMatches.filter((m) => m.sport === activeSport)
  }, [activeSport, sportsMatches])

  const handleSelectBet = useCallback((selection: BetSelection) => {
    setSelectedBets((prev) => {
      const existing = prev.find((b) => b.matchId === selection.matchId && b.selection === selection.selection)
      if (existing) {
        return prev.filter((b) => !(b.matchId === selection.matchId && b.selection === selection.selection))
      }
      const withoutMatch = prev.filter((b) => b.matchId !== selection.matchId)
      return [...withoutMatch, selection]
    })
  }, [])

  const handleRemoveBet = useCallback((matchId: string) => {
    setSelectedBets((prev) => prev.filter((b) => b.matchId !== matchId))
  }, [])

  const handleClearBets = useCallback(() => {
    setSelectedBets([])
  }, [])

  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-5 flex flex-col gap-4 pb-8">
        <SportNavBar
          sports={SPORT_CATEGORIES}
          activeSport={activeSport}
          onSportChange={setActiveSport}
        />

        <Tabs tabs={mainTabs} activeTab={activeTab} onChange={setActiveTab} />

        <div>
          <h2 className="text-sm font-bold text-text-primary mb-2 flex items-center gap-1.5">🔥 Popular</h2>
          <SportPills
            sports={sportPills}
            activeSport={activeSport}
            onSportChange={setActiveSport}
          />
        </div>

        {liveMatches.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-text-primary mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-danger rounded-full animate-pulse-live" />
              Live Now
            </h2>
            <MatchGrid
              matches={liveMatches.filter((m) => activeSport === "all" || m.sport === activeSport)}
              selectedBets={selectedBets}
              onSelectBet={handleSelectBet}
            />
          </div>
        )}

        <div>
          <h2 className="text-sm font-bold text-text-primary mb-2">Upcoming</h2>
          <MatchGrid
            matches={filteredMatches.filter((m) => !m.isLive)}
            selectedBets={selectedBets}
            onSelectBet={handleSelectBet}
          />
        </div>

        <HotCombos />
      </div>

      <Betslip
        selections={selectedBets}
        onRemove={handleRemoveBet}
        onClear={handleClearBets}
      />
    </div>
  )
}

export default SportsPage
