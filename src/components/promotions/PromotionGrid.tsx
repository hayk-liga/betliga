import React from "react"

import { PromotionCard } from "@/components/promotions/PromotionCard"
import type { Promotion } from "@/types/promotion"

interface PromotionGridProps {
  promotions: Promotion[]
}

export const PromotionGrid = ({ promotions }: PromotionGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  )
}
