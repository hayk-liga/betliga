export type Size = "sm" | "md" | "lg"

export type Variant = "primary" | "secondary" | "ghost" | "danger"

export interface NavItem {
  label: string
  href: string
  icon?: string
  badge?: string
  badgeDot?: boolean
  children?: NavItem[]
}

export interface TabItem {
  label: string
  value: string
  count?: number
}

export interface LeaderboardEntry {
  rank: number
  username: string
  wagered: number
  prize: number
}
