"use client"

import React from "react"

import { cn } from "@/lib/utils"
import type { Game } from "@/types/game"

interface GameCardProps {
  game: Game
  className?: string
}

export const GameCard = ({ game, className }: GameCardProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer transition-transform duration-200 hover:scale-[1.03]",
        className,
      )}
    >
      <div
        className="aspect-[4/5] w-full rounded-xl overflow-hidden"
        style={{ background: game.thumbnail }}
      />
      <div className="flex items-center gap-1.5 mt-1.5 px-0.5">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-live" />
        <span className="text-[11px] text-text-secondary">
          {game.players ?? 0} Playing
        </span>
      </div>
    </div>
  )
}
