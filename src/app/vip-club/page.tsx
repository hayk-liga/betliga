"use client"

import React from "react"
import { Crown } from "lucide-react"

import { vipTiers, vipRewardRows } from "@/data/mock-vip"

const VipClubPage = () => {
  return (
    <div className="px-4 sm:px-5 py-4">
      <div className="flex items-center gap-3 mb-5">
        <Crown size={24} className="text-accent" />
        <h1 className="text-lg font-bold text-text-primary">VIP Club</h1>
      </div>

      <div className="bg-bg-card border border-border rounded-xl overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-semibold text-text-secondary px-4 py-3">Reward</th>
              {vipTiers.map((tier) => (
                <th key={tier.name} className="text-center text-xs font-semibold px-4 py-3" style={{ color: tier.color }}>
                  {tier.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vipRewardRows.map((row) => (
              <tr key={row.key} className="border-b border-border last:border-b-0">
                <td className="text-sm text-text-primary px-4 py-3 font-medium">{row.label}</td>
                {vipTiers.map((tier) => (
                  <td key={tier.name} className="text-center text-sm text-text-secondary px-4 py-3">
                    {tier[row.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VipClubPage
