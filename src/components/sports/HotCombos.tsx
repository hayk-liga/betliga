"use client"

import React from "react"
import { Flame } from "lucide-react"

import { Card } from "@/components/ui/Card"

const combos = [
  {
    id: "c1",
    matches: ["Arsenal to Win", "Over 2.5 Goals", "Both Teams to Score"],
    totalOdds: 4.85,
    sport: "Soccer",
  },
  {
    id: "c2",
    matches: ["Lakers -5.5", "Over 210.5 Points"],
    totalOdds: 3.20,
    sport: "Basketball",
  },
  {
    id: "c3",
    matches: ["FaZe to Win", "Over 2.5 Maps", "FaZe Map 1 Win"],
    totalOdds: 5.50,
    sport: "CS2",
  },
]

export const HotCombos = () => {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-3">
        <Flame className="text-orange-500" size={16} />
        <h2 className="text-sm font-bold text-text-primary">Hot Combos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {combos.map((combo) => (
          <Card key={combo.id} className="p-3">
            <div className="text-[9px] text-text-secondary mb-1.5 uppercase font-medium tracking-wider">
              {combo.sport}
            </div>
            <div className="flex flex-col gap-1 mb-2.5">
              {combo.matches.map((match, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-text-primary">
                  <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                  {match}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-accent">{combo.totalOdds.toFixed(2)}</span>
              <button className="bg-accent text-bg-main text-[11px] font-semibold px-3 py-1 rounded transition-colors hover:bg-accent-hover">
                Add to Slip
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
