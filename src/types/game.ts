export interface Game {
  id: string
  name: string
  provider: string
  category: GameCategory
  thumbnail: string
  isLive?: boolean
  isNew?: boolean
  isHot?: boolean
  players?: number
  rtp?: number
  tags?: string[]
}

export type GameCategory =
  | "lobby"
  | "hold-and-win"
  | "provably-fair"
  | "jackpot"
  | "originals"
  | "table-games"
  | "grid"
  | "buy-feature"
  | "megaways"
  | "game-shows"
  | "vip-tables"
  | "blackjack"
  | "roulette"
  | "baccarat"
  | "dice"
  | "slots"

export interface GameProvider {
  id: string
  name: string
  logo: string
  gameCount: number
  hasCashback?: boolean
}

export interface Tournament {
  id: string
  name: string
  prizePool: number
  currency: string
  endsAt: string
  leaderboard: TournamentEntry[]
}

export interface TournamentEntry {
  rank: number
  username: string
  wagered: number
  prize: number
}
