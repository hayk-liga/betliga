import React from "react"

import { Badge } from "@/components/ui/Badge"
import type { Promotion } from "@/types/promotion"

interface PromotionCardProps {
  promotion: Promotion
}

export const PromotionCard = ({ promotion }: PromotionCardProps) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden border border-border hover:border-accent/20 transition-all cursor-pointer"
      style={{ background: promotion.gradient }}
    >
      <div className="p-4 sm:p-5">
        {promotion.badge && (
          <Badge variant={promotion.badge === "NEW" ? "new" : "hot"} className="mb-2">
            {promotion.badge}
          </Badge>
        )}
        <div className="text-[9px] text-text-secondary uppercase font-medium mb-0.5 tracking-wider">
          {promotion.category}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-text-primary mb-1.5 leading-tight">
          {promotion.title}
        </h3>
        <p className="text-xs text-text-secondary leading-relaxed mb-3">
          {promotion.description}
        </p>
        <button className="bg-accent text-bg-main text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-accent-hover transition-colors">
          {promotion.ctaText}
        </button>
      </div>
    </div>
  )
}
