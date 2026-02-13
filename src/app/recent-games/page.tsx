"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getRecentGames } from "@/data/mock-games"

const RecentGamesPage = () => {
  const games = getRecentGames()
  return <CategoryPageLayout title="Recent Games" games={games} />
}

export default RecentGamesPage
