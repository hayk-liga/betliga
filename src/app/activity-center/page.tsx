"use client"

import React from "react"
import Link from "next/link"
import { Activity, Gift, Target, RefreshCw, Crown, Users, Loader } from "lucide-react"

import { mockActivityPromos } from "@/data/mock-activity"

const iconMap: Record<string, React.ReactNode> = {
  gift: <Gift size={24} className="text-white" />,
  target: <Target size={24} className="text-white" />,
  refresh: <RefreshCw size={24} className="text-white" />,
  crown: <Crown size={24} className="text-white" />,
  users: <Users size={24} className="text-white" />,
  loader: <Loader size={24} className="text-white" />,
}

const ActivityCenterPage = () => {
  return (
    <div className="px-4 sm:px-5 py-4">
      <div className="flex items-center gap-3 mb-5">
        <Activity size={24} className="text-accent" />
        <h1 className="text-lg font-bold text-text-primary">Activity Center</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockActivityPromos.map((promo) => (
          <Link
            key={promo.id}
            href={promo.href}
            className="block rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div
              className="p-6 min-h-[160px] flex flex-col justify-between"
              style={{ background: promo.gradient }}
            >
              <div className="mb-4">
                {iconMap[promo.icon]}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{promo.title}</h3>
                <p className="text-sm text-white/70 mt-1">{promo.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ActivityCenterPage
