"use client"

import React, { createContext, useState, useCallback, type ReactNode } from "react"

import type { User } from "@/types/user"

interface AuthContextValue {
  user: User | null
  isAuthenticated: boolean
  isLoginOpen: boolean
  isSignUpOpen: boolean
  login: (email: string, password: string) => void
  signUp: (username: string, email: string, password: string) => void
  logout: () => void
  openLogin: () => void
  closeLogin: () => void
  openSignUp: () => void
  closeSignUp: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const login = useCallback((_email: string, _password: string) => {
    setUser({
      id: "1",
      username: "CryptoPlayer",
      email: _email,
      balance: 0.05432,
      currency: "BTC",
    })
    setIsLoginOpen(false)
  }, [])

  const signUp = useCallback((username: string, email: string, _password: string) => {
    setUser({
      id: "1",
      username,
      email,
      balance: 0,
      currency: "BTC",
    })
    setIsSignUpOpen(false)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const openLogin = useCallback(() => {
    setIsSignUpOpen(false)
    setIsLoginOpen(true)
  }, [])

  const closeLogin = useCallback(() => setIsLoginOpen(false), [])

  const openSignUp = useCallback(() => {
    setIsLoginOpen(false)
    setIsSignUpOpen(true)
  }, [])

  const closeSignUp = useCallback(() => setIsSignUpOpen(false), [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoginOpen,
        isSignUpOpen,
        login,
        signUp,
        logout,
        openLogin,
        closeLogin,
        openSignUp,
        closeSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
