"use client"

import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { GameCard } from "@/components/casino/GameCard"
import { getTopLiveGames } from "@/data/mock-games"

export const TopLiveGames = () => {
  const games = getTopLiveGames()

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">🎮</span>
          <h2 className="text-sm sm:text-base font-bold text-text-primary">Top Live Games</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs text-text-secondary hover:text-accent transition-colors">Show All</button>
          <div className="flex gap-1">
            <button className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:border-accent/30 transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:border-accent/30 transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
