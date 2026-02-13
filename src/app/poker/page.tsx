"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getPokerGames } from "@/data/mock-games"

const PokerPage = () => {
  const games = getPokerGames()
  return <CategoryPageLayout title="Poker" games={games} />
}

export default PokerPage
