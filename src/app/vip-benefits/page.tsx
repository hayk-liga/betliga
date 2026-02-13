"use client"

import React from "react"
import { Award, Copy, Users, Gift, Star, Zap, Shield } from "lucide-react"

import { mockVipProgress } from "@/data/mock-vip"
import { useAuth } from "@/hooks/useAuth"

const bonusCards = [
  { title: "Daily Bonus", description: "Claim your daily reward", icon: Gift, color: "text-accent" },
  { title: "Weekly Bonus", description: "Weekly loyalty reward", icon: Star, color: "text-yellow-500" },
  { title: "Monthly Bonus", description: "Monthly VIP exclusive", icon: Zap, color: "text-blue-500" },
  { title: "Special Perks", description: "VIP-only benefits", icon: Shield, color: "text-green-500" },
]

const VipBenefitsPage = () => {
  const { user } = useAuth()

  return (
    <div className="px-4 sm:px-5 py-4">
      <div className="flex items-center gap-3 mb-5">
        <Award size={24} className="text-accent" />
        <h1 className="text-lg font-bold text-text-primary">VIP Benefits</h1>
      </div>

      <div className="bg-bg-card border border-border rounded-xl p-5 mb-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
            {user?.username?.charAt(0).toUpperCase() ?? "G"}
          </div>
          <div>
            <p className="text-base font-semibold text-text-primary">{user?.username ?? "Guest"}</p>
            <p className="text-xs text-text-secondary">VIP {mockVipProgress.currentTier}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-text-secondary">{mockVipProgress.currentTier}</span>
            <span className="text-text-secondary">{mockVipProgress.nextTier}</span>
          </div>
          <div className="w-full h-2 bg-bg-main rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all"
              style={{ width: `${mockVipProgress.percentage}%` }}
            />
          </div>
          <p className="text-[10px] text-text-secondary mt-1">
            {mockVipProgress.currentXp.toLocaleString()} / {mockVipProgress.requiredXp.toLocaleString()} XP
          </p>
        </div>
      </div>

      <div className="bg-bg-card border border-border rounded-xl p-5 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Users size={18} className="text-accent" />
          <h2 className="text-sm font-bold text-text-primary">Invite Friends</h2>
        </div>
        <p className="text-xs text-text-secondary mb-3">Share your referral link or code to earn rewards</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-bg-input border border-border rounded-lg px-3 py-2 text-xs text-text-secondary truncate">
              https://betpanda.io/ref/PLAYER123
            </div>
            <button className="w-8 h-8 border border-border rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-colors">
              <Copy size={14} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-bg-input border border-border rounded-lg px-3 py-2 text-xs text-text-secondary">
              PLAYER123
            </div>
            <button className="w-8 h-8 border border-border rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-colors">
              <Copy size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {bonusCards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.title} className="bg-bg-card border border-border rounded-xl p-4">
              <Icon size={24} className={card.color} />
              <h3 className="text-sm font-semibold text-text-primary mt-2">{card.title}</h3>
              <p className="text-xs text-text-secondary mt-0.5">{card.description}</p>
              <button className="mt-3 bg-accent text-white text-xs font-semibold rounded-lg px-4 py-1.5 hover:bg-accent-hover transition-colors">
                Claim
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VipBenefitsPage
