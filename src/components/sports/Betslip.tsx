"use client"

import React, { useState } from "react"
import { X, Trash2, ChevronUp, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import type { BetSelection } from "@/types/match"

interface BetslipProps {
  selections: BetSelection[]
  onRemove: (matchId: string) => void
  onClear: () => void
}

export const Betslip = ({ selections, onRemove, onClear }: BetslipProps) => {
  const [stake, setStake] = useState("")
  const [isExpanded, setIsExpanded] = useState(true)

  const totalOdds = selections.reduce((acc, sel) => acc * sel.odds, 1)
  const potentialWin = stake ? parseFloat(stake) * totalOdds : 0

  if (selections.length === 0) return null

  return (
    <div className="fixed bottom-12 md:bottom-3 right-3 z-40 w-72 bg-bg-elevated border border-border rounded-xl shadow-2xl animate-slide-in-right">
      <div
        className="flex items-center justify-between px-3 py-2.5 border-b border-border cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-text-primary">Betslip</span>
          <span className="bg-accent text-bg-main text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {selections.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={(e) => { e.stopPropagation(); onClear() }} className="text-text-secondary hover:text-danger">
            <Trash2 size={12} />
          </button>
          {isExpanded ? <ChevronDown size={14} className="text-text-secondary" /> : <ChevronUp size={14} className="text-text-secondary" />}
        </div>
      </div>

      {isExpanded && (
        <div className="max-h-64 overflow-y-auto">
          <div className="p-2.5 flex flex-col gap-1.5">
            {selections.map((sel) => (
              <div key={sel.matchId} className="bg-bg-card rounded-lg p-2 border border-border">
                <div className="flex items-start justify-between mb-0.5">
                  <div className="flex-1">
                    <p className="text-[9px] text-text-secondary">{sel.match.league.name}</p>
                    <p className="text-[11px] text-text-primary font-medium leading-tight">
                      {sel.match.homeTeam.name} vs {sel.match.awayTeam.name}
                    </p>
                  </div>
                  <button onClick={() => onRemove(sel.matchId)} className="text-text-secondary hover:text-danger ml-1">
                    <X size={12} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-text-secondary">
                    {sel.selection === "home" ? "1" : sel.selection === "draw" ? "X" : "2"}
                  </span>
                  <span className="text-[11px] font-bold text-accent">{sel.odds.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="px-2.5 pb-2.5 flex flex-col gap-1.5">
            {selections.length > 1 && (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-text-secondary">Total Odds</span>
                <span className="text-accent font-bold">{totalOdds.toFixed(2)}</span>
              </div>
            )}
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              placeholder="Enter stake..."
              className="w-full bg-bg-input border border-border rounded-lg px-2.5 py-1.5 text-xs text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent/40"
            />
            <div className={cn("flex items-center justify-between text-[11px]", potentialWin > 0 ? "opacity-100" : "opacity-40")}>
              <span className="text-text-secondary">Potential Win</span>
              <span className="text-accent font-bold">${potentialWin.toFixed(2)}</span>
            </div>
            <button
              disabled={!stake || parseFloat(stake) <= 0}
              className="w-full bg-accent text-bg-main text-xs font-semibold py-2 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Place Bet
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
