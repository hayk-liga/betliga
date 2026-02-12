"use client"

import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { GameCard } from "@/components/casino/GameCard"
import type { Game } from "@/types/game"

interface GameGridProps {
  title: string
  games: Game[]
  showViewAll?: boolean
}

export const GameGrid = ({ title, games, showViewAll = true }: GameGridProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm sm:text-base font-bold text-text-primary">{title}</h2>
        <div className="flex items-center gap-2">
          {showViewAll && (
            <button className="text-xs text-text-secondary hover:text-accent transition-colors">
              Show All
            </button>
          )}
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
