export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  balance: number
  currency: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}
