"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getFuturesGames } from "@/data/mock-games"

const FuturesTradingPage = () => {
  const games = getFuturesGames()
  return <CategoryPageLayout title="Futures Trading" games={games} />
}

export default FuturesTradingPage
