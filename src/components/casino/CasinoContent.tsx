"use client"

import React, { useMemo, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Search, ChevronDown } from "lucide-react"

import { HeroCarousel } from "@/components/home/HeroCarousel"
import { CategoryTabs } from "@/components/casino/CategoryTabs"
import { GameGrid } from "@/components/casino/GameGrid"
import { OriginalsCarousel } from "@/components/casino/OriginalsCarousel"
import { LiveRtpChart } from "@/components/casino/LiveRtpChart"
import { DailyTournament } from "@/components/casino/DailyTournament"
import { CASINO_CATEGORIES } from "@/constants/casino-categories"
import { mockGames } from "@/data/mock-games"
import { mockProviders } from "@/data/mock-providers"
import { getGamesOfTheWeek, getNewGames } from "@/data/mock-games"

export const CasinoContent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [search, setSearch] = useState("")
  const activeCategory = searchParams.get("category") || "lobby"
  const [selectedProvider, setSelectedProvider] = useState("")

  const handleCategoryChange = (category: string) => {
    if (category === "lobby") {
      router.push("/casino", { scroll: false })
    } else {
      router.push(`/casino?category=${category}`, { scroll: false })
    }
  }

  const filteredGames = useMemo(() => {
    let games = activeCategory === "lobby"
      ? mockGames
      : mockGames.filter((g) => g.category === activeCategory)

    if (search) {
      games = games.filter((g) =>
        g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.provider.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (selectedProvider) {
      const providerName = mockProviders.find((p) => p.id === selectedProvider)?.name
      if (providerName) {
        games = games.filter((g) => g.provider === providerName)
      }
    }

    return games
  }, [activeCategory, search, selectedProvider])

  const gamesOfTheWeek = getGamesOfTheWeek()
  const newGames = getNewGames()

  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-5 flex flex-col gap-5 pb-8">
        <HeroCarousel />

        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full bg-bg-card border border-border rounded-lg pl-9 pr-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent/40 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="appearance-none bg-bg-card border border-border rounded-lg pl-3 pr-8 py-2 text-sm text-text-primary focus:outline-none focus:border-accent/40 transition-colors cursor-pointer"
            >
              <option value="">Providers</option>
              {mockProviders.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
          </div>
        </div>

        <CategoryTabs
          categories={CASINO_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {activeCategory === "lobby" && (
          <>
            <GameGrid title="Games Of The Week" games={gamesOfTheWeek} />
            <GameGrid title="New Games" games={newGames} />
            <OriginalsCarousel />
          </>
        )}

        {activeCategory !== "lobby" && (
          <GameGrid
            title={CASINO_CATEGORIES.find((c) => c.value === activeCategory)?.label || "Games"}
            games={filteredGames}
            showViewAll={false}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <LiveRtpChart />
          <DailyTournament />
        </div>
      </div>
    </div>
  )
}
