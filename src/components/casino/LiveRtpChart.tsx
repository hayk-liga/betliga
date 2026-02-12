"use client"

import React from "react"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

import { Card } from "@/components/ui/Card"

const rtpData = [
  { time: "00:00", rtp: 95.2 },
  { time: "02:00", rtp: 96.1 },
  { time: "04:00", rtp: 95.8 },
  { time: "06:00", rtp: 96.5 },
  { time: "08:00", rtp: 95.9 },
  { time: "10:00", rtp: 96.8 },
  { time: "12:00", rtp: 96.3 },
  { time: "14:00", rtp: 97.1 },
  { time: "16:00", rtp: 96.0 },
  { time: "18:00", rtp: 96.5 },
  { time: "20:00", rtp: 95.7 },
  { time: "22:00", rtp: 96.27 },
]

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-bg-elevated border border-border rounded-lg p-2 text-xs">
        <p className="text-text-secondary">{label}</p>
        <p className="text-accent font-bold">{payload[0].value}%</p>
      </div>
    )
  }
  return null
}

export const LiveRtpChart = () => {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-bold text-text-primary">Live RTP (24H)</h3>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-accent">96.27%</div>
          <div className="text-[10px] text-text-secondary">↓ 5.2%</div>
        </div>
      </div>
      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rtpData}>
            <XAxis
              dataKey="time"
              tick={{ fill: "#8899AA", fontSize: 9 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[94, 98]}
              tick={{ fill: "#8899AA", fontSize: 9 }}
              axisLine={false}
              tickLine={false}
              width={25}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="rtp"
              stroke="#00D553"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 3, fill: "#00D553" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
