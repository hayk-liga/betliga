"use client"

import React, { useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"

import { HeroCarousel } from "@/components/home/HeroCarousel"
import { CategoryTabs } from "@/components/casino/CategoryTabs"
import { GameGrid } from "@/components/casino/GameGrid"
import { LIVE_CASINO_CATEGORIES } from "@/constants/casino-categories"
import { getLiveCasinoGames } from "@/data/mock-games"
import { mockProviders } from "@/data/mock-providers"
import { Badge } from "@/components/ui/Badge"

export const LiveCasinoContent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeCategory = searchParams.get("category") || "lobby"

  const handleCategoryChange = (category: string) => {
    if (category === "lobby") {
      router.push("/live-casino", { scroll: false })
    } else {
      router.push(`/live-casino?category=${category}`, { scroll: false })
    }
  }
  const allLiveGames = getLiveCasinoGames()

  const filteredGames = useMemo(() => {
    if (activeCategory === "lobby") return allLiveGames
    return allLiveGames.filter((g) => g.category === activeCategory)
  }, [activeCategory, allLiveGames])

  const liveProviders = mockProviders.filter((p) => p.hasCashback)

  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-5 flex flex-col gap-5 pb-8">
        <HeroCarousel />

        <CategoryTabs
          categories={LIVE_CASINO_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div>
          <h2 className="text-sm sm:text-base font-bold text-text-primary mb-3">Top Live Providers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {liveProviders.map((provider) => (
              <div
                key={provider.id}
                className="relative rounded-xl overflow-hidden bg-bg-card border border-border h-24 flex items-end p-3 cursor-pointer hover:border-accent/30 transition-colors"
                style={{ background: `linear-gradient(135deg, #0d2137, #162a3a)` }}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-text-primary font-bold">{provider.name}</span>
                  {provider.hasCashback && (
                    <Badge variant="cashback">5% EXTRA CASHBACK</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <GameGrid
          title={activeCategory === "lobby" ? "All Live Games" : LIVE_CASINO_CATEGORIES.find((c) => c.value === activeCategory)?.label || "Games"}
          games={filteredGames}
          showViewAll={false}
        />
      </div>
    </div>
  )
}
