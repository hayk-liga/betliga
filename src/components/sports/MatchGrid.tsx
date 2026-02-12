"use client"

import React from "react"

import { MatchCard } from "@/components/sports/MatchCard"
import type { Match, BetSelection } from "@/types/match"

interface MatchGridProps {
  matches: Match[]
  selectedBets: BetSelection[]
  onSelectBet: (selection: BetSelection) => void
}

export const MatchGrid = ({ matches, selectedBets, onSelectBet }: MatchGridProps) => {
  if (matches.length === 0) {
    return (
      <div className="text-center py-12 text-text-secondary">
        No matches available
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      {matches.map((match) => (
        <MatchCard
          key={match.id}
          match={match}
          selectedBets={selectedBets}
          onSelectBet={onSelectBet}
        />
      ))}
    </div>
  )
}
