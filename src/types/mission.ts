export type MissionType = "daily" | "weekly"

export type MissionStatus = "available" | "in_progress" | "completed" | "claimed"

export interface Mission {
  id: string
  title: string
  description: string
  reward: number
  rewardCurrency: string
  type: MissionType
  status: MissionStatus
  progress: number
  target: number
}
