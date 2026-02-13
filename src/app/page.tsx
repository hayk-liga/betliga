"use client"

import React from "react"

import { HeroCarousel } from "@/components/home/HeroCarousel"
import { GameGrid } from "@/components/casino/GameGrid"
import { getNewGames, getHotGames, getRecentGames } from "@/data/mock-games"

const HomePage = () => {
  const newGames = getNewGames()
  const hotGames = getHotGames()
  const recentGames = getRecentGames()

  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-5 flex flex-col gap-5 pb-8">
        <HeroCarousel />
        <GameGrid title="New Games" games={newGames} />
        <GameGrid title="HOT" games={hotGames} />
        <GameGrid title="Recent Play" games={recentGames} />
      </div>
    </div>
  )
}

export default HomePage
