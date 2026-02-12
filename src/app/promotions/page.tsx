"use client"

import React, { useState } from "react"

import { Tabs } from "@/components/ui/Tabs"
import { PromotionGrid } from "@/components/promotions/PromotionGrid"
import { mockPromotions, getCasinoPromotions, getSportsPromotions } from "@/data/mock-promotions"

const tabs = [
  { label: "All", value: "all" },
  { label: "Casino", value: "casino" },
  { label: "Sports", value: "sports" },
]

const PromotionsPage = () => {
  const [activeTab, setActiveTab] = useState("all")

  const promotions = activeTab === "all"
    ? mockPromotions
    : activeTab === "casino"
      ? getCasinoPromotions()
      : getSportsPromotions()

  return (
    <div className="flex flex-col">
      <div className="px-4 sm:px-5 flex flex-col gap-4 pb-8">
        <div>
          <h1 className="text-lg font-bold text-text-primary mb-0.5">Promotions</h1>
          <p className="text-xs text-text-secondary">Check out our latest bonuses and offers</p>
        </div>

        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <PromotionGrid promotions={promotions} />
      </div>
    </div>
  )
}

export default PromotionsPage
