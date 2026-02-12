"use client"

import React from "react"
import { Trophy } from "lucide-react"

import { Card } from "@/components/ui/Card"
import { mockTournaments } from "@/data/mock-tournaments"
import { formatCurrency } from "@/lib/formatters"
import { cn } from "@/lib/utils"

export const DailyTournament = () => {
  const tournament = mockTournaments[0]

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="text-accent" size={16} />
          <h3 className="text-sm font-bold text-text-primary">{tournament.name}</h3>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-text-secondary">Prize Pool</div>
          <div className="text-accent font-bold text-sm">{formatCurrency(tournament.prizePool)}</div>
        </div>
      </div>

      <div className="mb-3">
        <div className="text-[10px] text-text-secondary mb-1">Top Players</div>
        <div className="flex flex-col gap-0.5">
          {tournament.leaderboard.slice(0, 3).map((entry) => (
            <div
              key={entry.rank}
              className={cn(
                "flex items-center justify-between px-2 py-1.5 rounded text-xs",
                entry.rank <= 3 ? "bg-bg-main/50" : "",
              )}
            >
              <div className="flex items-center gap-2">
                <span className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                  entry.rank === 1 && "bg-yellow-500/20 text-yellow-400",
                  entry.rank === 2 && "bg-gray-400/20 text-gray-300",
                  entry.rank === 3 && "bg-orange-500/20 text-orange-400",
                )}>
                  {entry.rank}
                </span>
                <span className="text-text-primary">{entry.username}</span>
              </div>
              <span className="text-accent font-bold">{formatCurrency(entry.prize)}</span>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full text-center text-xs text-accent border border-accent/30 rounded-lg py-2 hover:bg-accent/10 transition-colors">
        View Tournament
      </button>
    </Card>
  )
}
