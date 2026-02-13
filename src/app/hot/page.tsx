"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getHotGames } from "@/data/mock-games"

const HotPage = () => {
  const games = getHotGames()
  return <CategoryPageLayout title="HOT" games={games} />
}

export default HotPage
