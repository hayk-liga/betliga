"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getLiveCasinoGames } from "@/data/mock-games"

const LiveEntertainmentPage = () => {
  const games = getLiveCasinoGames()
  return <CategoryPageLayout title="Live Entertainment" games={games} />
}

export default LiveEntertainmentPage
