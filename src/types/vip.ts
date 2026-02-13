export type VipTierName = "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond"

export interface VipTier {
  name: VipTierName
  color: string
  rakeback: string
  upgradeBonus: string
  weeklyBonus: string
  monthlyBonus: string
  birthdayBonus: string
  dailyBonus: string
}

export interface VipProgress {
  currentTier: VipTierName
  nextTier: VipTierName
  currentXp: number
  requiredXp: number
  percentage: number
}

export interface VipRewardRow {
  label: string
  key: keyof Omit<VipTier, "name" | "color">
}
