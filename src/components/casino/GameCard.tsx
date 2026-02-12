"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"
import type { Game } from "@/types/game"

interface GameCardProps {
  game: Game
  className?: string
}

export const GameCard = ({ game, className }: GameCardProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.03]",
        className,
      )}
    >
      <div
        className="aspect-[4/5] w-full relative"
        style={{ background: game.thumbnail }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-1.5 left-1.5 flex gap-1">
          {game.isLive && <Badge variant="live">LIVE</Badge>}
          {game.isNew && <Badge variant="new">New</Badge>}
          {game.isHot && <Badge variant="hot">HOT</Badge>}
        </div>
        {game.players && (
          <div className="absolute top-1.5 right-1.5">
            <div className="bg-black/60 rounded-full px-1.5 py-0.5 text-[9px] text-text-secondary flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {game.players}
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 px-2 pb-2">
          <p className="text-[11px] font-semibold text-white truncate leading-tight">{game.name}</p>
          <p className="text-[9px] text-white/50 truncate">{game.provider}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="bg-accent text-bg-main px-3 py-1.5 rounded-md text-xs font-bold">
            Play Now
          </div>
        </div>
      </div>
    </div>
  )
}
