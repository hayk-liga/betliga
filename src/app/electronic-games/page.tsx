"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getElectronicGames } from "@/data/mock-games"

const ElectronicGamesPage = () => {
  const games = getElectronicGames()
  return <CategoryPageLayout title="Electronic Games" games={games} />
}

export default ElectronicGamesPage
