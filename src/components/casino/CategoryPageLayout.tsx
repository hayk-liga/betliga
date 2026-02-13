"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

import { GameCard } from "@/components/casino/GameCard"
import type { Game } from "@/types/game"

interface CategoryPageLayoutProps {
  title: string
  games: Game[]
  backHref?: string
}

const ITEMS_PER_PAGE = 18

export const CategoryPageLayout = ({ title, games, backHref = "/" }: CategoryPageLayoutProps) => {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE)
  const paginatedGames = games.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <div className="px-4 sm:px-5 py-4">
      <div className="flex items-center gap-3 mb-5">
        <Link
          href={backHref}
          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/30 transition-colors"
        >
          <ArrowLeft size={16} />
        </Link>
        <h1 className="text-lg font-bold text-text-primary">{title}</h1>
        <span className="text-sm text-text-secondary">({games.length})</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
        {paginatedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:border-accent/30 transition-colors disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                p === page
                  ? "bg-accent text-white"
                  : "border border-border text-text-secondary hover:border-accent/30"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:border-accent/30 transition-colors disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
