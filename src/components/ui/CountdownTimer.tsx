"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useCountdown } from "@/hooks/useCountdown"

interface CountdownTimerProps {
  targetDate: string
  className?: string
  compact?: boolean
}

export const CountdownTimer = ({ targetDate, className, compact = false }: CountdownTimerProps) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  const timeBlocks = [
    { value: days, label: "DAYS" },
    { value: hours, label: "HRS" },
    { value: minutes, label: "MIN" },
    { value: seconds, label: "SEC" },
  ]

  if (compact) {
    return (
      <div className={cn("flex items-center gap-1.5", className)}>
        {timeBlocks.map((block, i) => (
          <React.Fragment key={block.label}>
            <div className="flex flex-col items-center">
              <span className="text-accent font-mono font-bold text-lg leading-tight">
                {String(block.value).padStart(2, "0")}
              </span>
              <span className="text-[8px] text-text-secondary uppercase tracking-wider">{block.label}</span>
            </div>
            {i < timeBlocks.length - 1 && (
              <span className="text-text-secondary/30 text-sm font-bold self-start mt-0.5">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {timeBlocks.map((block, i) => (
        <React.Fragment key={block.label}>
          <div className="flex flex-col items-center">
            <div className="bg-bg-main rounded-md px-2 py-1 min-w-[36px] text-center">
              <span className="text-accent font-mono font-bold text-base">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[8px] text-text-secondary mt-0.5 uppercase tracking-wider">{block.label}</span>
          </div>
          {i < timeBlocks.length - 1 && (
            <span className="text-text-secondary/30 text-xs font-bold self-start mt-2">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
