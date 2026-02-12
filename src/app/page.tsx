"use client"

import React from "react"

import { HeroCarousel } from "@/components/home/HeroCarousel"
import { StepProgressBar } from "@/components/home/StepProgressBar"
import { PressLogos } from "@/components/home/PressLogos"
import { CryptoBanner } from "@/components/home/CryptoBanner"
import { TopLiveGames } from "@/components/home/TopLiveGames"
import { CryptoTicker } from "@/components/ui/CryptoTicker"
import { GameGrid } from "@/components/casino/GameGrid"
import { getGamesOfTheWeek, getNewGames } from "@/data/mock-games"

const HomePage = () => {
  const gamesOfTheWeek = getGamesOfTheWeek()
  const newGames = getNewGames()

  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-5 flex flex-col gap-5 pb-8">
        <HeroCarousel />
        <StepProgressBar />
        <PressLogos />
        <CryptoBanner />
        <CryptoTicker />
        <TopLiveGames />
        <GameGrid title="Games Of The Week" games={gamesOfTheWeek} />
        <GameGrid title="New Games" games={newGames} />
      </div>
    </div>
  )
}

export default HomePage
