"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getSlotGames } from "@/data/mock-games"

const SlotsPage = () => {
  const games = getSlotGames()
  return <CategoryPageLayout title="Slots" games={games} />
}

export default SlotsPage
