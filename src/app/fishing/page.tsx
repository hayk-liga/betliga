"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getFishingGames } from "@/data/mock-games"

const FishingPage = () => {
  const games = getFishingGames()
  return <CategoryPageLayout title="Fishing" games={games} />
}

export default FishingPage
