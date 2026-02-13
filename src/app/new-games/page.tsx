"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getNewGames } from "@/data/mock-games"

const NewGamesPage = () => {
  const games = getNewGames()
  return <CategoryPageLayout title="New Games" games={games} />
}

export default NewGamesPage
