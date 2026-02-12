"use client"

import React from "react"

import { Tabs } from "@/components/ui/Tabs"
import type { TabItem } from "@/types/common"

interface CategoryTabsProps {
  categories: TabItem[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export const CategoryTabs = ({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <Tabs
      tabs={categories}
      activeTab={activeCategory}
      onChange={onCategoryChange}
    />
  )
}
