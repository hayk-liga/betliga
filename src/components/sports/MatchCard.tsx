"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/Card"
import type { Match, BetSelection } from "@/types/match"

interface MatchCardProps {
  match: Match
  selectedBets: BetSelection[]
  onSelectBet: (selection: BetSelection) => void
}

export const MatchCard = ({ match, selectedBets, onSelectBet }: MatchCardProps) => {
  const isSelected = (selection: "home" | "draw" | "away") =>
    selectedBets.some((b) => b.matchId === match.id && b.selection === selection)

  const handleSelect = (selection: "home" | "draw" | "away", odds: number) => {
    onSelectBet({
      matchId: match.id,
      match,
      selection,
      odds,
    })
  }

  return (
    <Card className="p-0 overflow-hidden">
      <div className="px-3 py-2 flex items-center justify-between border-b border-border/50">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-text-secondary">{match.league.country}</span>
          <span className="text-[10px] text-text-secondary">·</span>
          <span className="text-[10px] text-text-secondary">{match.league.name}</span>
        </div>
        {match.isLive ? (
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-danger font-medium">{match.minute}&apos; 1st half</span>
            <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse-live" />
          </div>
        ) : (
          <span className="text-[10px] text-text-secondary">
            {new Date(match.startTime).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        )}
      </div>

      <div className="px-3 py-2.5">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-bg-elevated flex items-center justify-center text-[8px] text-text-secondary">⚽</div>
            <span className="text-[13px] text-text-primary">{match.homeTeam.name}</span>
          </div>
          {match.homeTeam.score !== undefined && (
            <span className="text-[13px] font-bold text-text-primary">{match.homeTeam.score}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-bg-elevated flex items-center justify-center text-[8px] text-text-secondary">⚽</div>
            <span className="text-[13px] text-text-primary">{match.awayTeam.name}</span>
          </div>
          {match.awayTeam.score !== undefined && (
            <span className="text-[13px] font-bold text-text-primary">{match.awayTeam.score}</span>
          )}
        </div>
      </div>

      <div className="px-3 pb-2.5">
        <div className="text-[9px] text-text-secondary mb-1.5">1x2</div>
        <div className="flex gap-1">
          <button
            onClick={() => handleSelect("home", match.odds.home)}
            className={cn(
              "flex-1 flex items-center justify-between px-2 py-1.5 rounded border text-[12px] transition-all",
              isSelected("home")
                ? "bg-accent/15 border-accent text-accent"
                : "border-border bg-bg-elevated hover:border-accent/30",
            )}
          >
            <span className="text-text-secondary">1</span>
            <span className="font-bold">{match.odds.home.toFixed(2)}</span>
          </button>
          {match.odds.draw !== undefined && (
            <button
              onClick={() => handleSelect("draw", match.odds.draw!)}
              className={cn(
                "flex-1 flex items-center justify-between px-2 py-1.5 rounded border text-[12px] transition-all",
                isSelected("draw")
                  ? "bg-accent/15 border-accent text-accent"
                  : "border-border bg-bg-elevated hover:border-accent/30",
              )}
            >
              <span className="text-text-secondary">draw</span>
              <span className="font-bold">{match.odds.draw.toFixed(2)}</span>
            </button>
          )}
          <button
            onClick={() => handleSelect("away", match.odds.away)}
            className={cn(
              "flex-1 flex items-center justify-between px-2 py-1.5 rounded border text-[12px] transition-all",
              isSelected("away")
                ? "bg-accent/15 border-accent text-accent"
                : "border-border bg-bg-elevated hover:border-accent/30",
            )}
          >
            <span className="text-text-secondary">2</span>
            <span className="font-bold">{match.odds.away.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </Card>
  )
}
