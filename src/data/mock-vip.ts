import type { VipTier, VipProgress, VipRewardRow } from "@/types/vip"

export const vipTiers: VipTier[] = [
  {
    name: "Bronze",
    color: "#CD7F32",
    rakeback: "5%",
    upgradeBonus: "$10",
    weeklyBonus: "$5",
    monthlyBonus: "$20",
    birthdayBonus: "$10",
    dailyBonus: "$1",
  },
  {
    name: "Silver",
    color: "#C0C0C0",
    rakeback: "10%",
    upgradeBonus: "$50",
    weeklyBonus: "$15",
    monthlyBonus: "$60",
    birthdayBonus: "$25",
    dailyBonus: "$3",
  },
  {
    name: "Gold",
    color: "#FFD700",
    rakeback: "15%",
    upgradeBonus: "$200",
    weeklyBonus: "$50",
    monthlyBonus: "$200",
    birthdayBonus: "$100",
    dailyBonus: "$10",
  },
  {
    name: "Platinum",
    color: "#E5E4E2",
    rakeback: "20%",
    upgradeBonus: "$1,000",
    weeklyBonus: "$200",
    monthlyBonus: "$800",
    birthdayBonus: "$500",
    dailyBonus: "$25",
  },
  {
    name: "Diamond",
    color: "#B9F2FF",
    rakeback: "25%",
    upgradeBonus: "$5,000",
    weeklyBonus: "$500",
    monthlyBonus: "$2,000",
    birthdayBonus: "$1,000",
    dailyBonus: "$50",
  },
]

export const vipRewardRows: VipRewardRow[] = [
  { label: "Rakeback", key: "rakeback" },
  { label: "Upgrade Bonus", key: "upgradeBonus" },
  { label: "Weekly Bonus", key: "weeklyBonus" },
  { label: "Monthly Bonus", key: "monthlyBonus" },
  { label: "Birthday Bonus", key: "birthdayBonus" },
  { label: "Daily Bonus", key: "dailyBonus" },
]

export const mockVipProgress: VipProgress = {
  currentTier: "Silver",
  nextTier: "Gold",
  currentXp: 3500,
  requiredXp: 10000,
  percentage: 35,
}
