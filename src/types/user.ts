export interface CryptoBalance {
  currency: string
  symbol: string
  balance: number
  color: string
}

export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  balance: number
  currency: string
  balances: CryptoBalance[]
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}
