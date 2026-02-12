"use client"

import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { GameCard } from "@/components/casino/GameCard"
import { getOriginals } from "@/data/mock-games"

export const OriginalsCarousel = () => {
  const originals = getOriginals()

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-sm sm:text-base font-bold text-text-primary">
            Betpanda Originals
          </h2>
          <p className="text-[11px] text-text-secondary mt-0.5">Provably fair games</p>
        </div>
        <div className="flex gap-1">
          <button className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:border-accent/30 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <button className="w-6 h-6 rounded border border-border flex items-center justify-center text-text-secondary hover:border-accent/30 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2.5">
        {originals.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}
