"use client"

import React, { useState, useMemo, useCallback } from "react"

import { SportNavBar } from "@/components/sports/SportNavBar"
import { MatchGrid } from "@/components/sports/MatchGrid"
import { Betslip } from "@/components/sports/Betslip"
import { HotCombos } from "@/components/sports/HotCombos"
import { ESPORT_CATEGORIES } from "@/constants/sport-categories"
import { getEsportsMatches } from "@/data/mock-matches"
import type { BetSelection } from "@/types/match"

const EsportsPage = () => {
  const [activeSport, setActiveSport] = useState("all")
  const [selectedBets, setSelectedBets] = useState<BetSelection[]>([])

  const esportsMatches = getEsportsMatches()

  const filteredMatches = useMemo(() => {
    if (activeSport === "all") return esportsMatches
    return esportsMatches.filter((m) => m.sport === activeSport)
  }, [activeSport, esportsMatches])

  const liveMatches = filteredMatches.filter((m) => m.isLive)
  const upcomingMatches = filteredMatches.filter((m) => !m.isLive)

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

  const allSports = [
    { id: "all", name: "All", icon: "🎮" },
    ...ESPORT_CATEGORIES.map((c) => ({ ...c })),
  ]

  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-5 flex flex-col gap-4 pb-8">
        <div>
          <h1 className="text-lg font-bold text-text-primary mb-0.5">Esports</h1>
          <p className="text-xs text-text-secondary">Bet on CS2, League of Legends, Dota 2, and more</p>
        </div>

        <SportNavBar
          sports={allSports}
          activeSport={activeSport}
          onSportChange={setActiveSport}
        />

        {liveMatches.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-text-primary mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-danger rounded-full animate-pulse-live" />
              Live Now
            </h2>
            <MatchGrid
              matches={liveMatches}
              selectedBets={selectedBets}
              onSelectBet={handleSelectBet}
            />
          </div>
        )}

        <div>
          <h2 className="text-sm font-bold text-text-primary mb-2">Upcoming Matches</h2>
          <MatchGrid
            matches={upcomingMatches}
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

export default EsportsPage
