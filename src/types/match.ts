import type { League } from "@/types/sport"

export interface Team {
  name: string
  logo?: string
  score?: number
}

export interface MatchOdds {
  home: number
  draw?: number
  away: number
}

export interface Match {
  id: string
  league: League
  homeTeam: Team
  awayTeam: Team
  odds: MatchOdds
  startTime: string
  isLive: boolean
  minute?: number
  sport: string
}

export interface BetSelection {
  matchId: string
  match: Match
  selection: "home" | "draw" | "away"
  odds: number
}
