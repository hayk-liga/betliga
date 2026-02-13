"use client"

import React from "react"

import { CategoryPageLayout } from "@/components/casino/CategoryPageLayout"
import { getTableGames } from "@/data/mock-games"

const TableGamesPage = () => {
  const games = getTableGames()
  return <CategoryPageLayout title="Table Games" games={games} />
}

export default TableGamesPage
