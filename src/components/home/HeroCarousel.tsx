"use client"

import React from "react"
import { ChevronRight } from "lucide-react"

import { Carousel } from "@/components/ui/Carousel"

const slides = [
  {
    preTitle: "Join Betpanda & get",
    title: "100% BONUS",
    subtitle: "UP TO 1 BTC!",
    bullets: ["Anonymous", "Zero fees & limits", "VPN Friendly"],
    cta: "Join Now",
    bgFrom: "#0a2a1a",
    bgTo: "#0d1f2f",
  },
  {
    preTitle: "Join Betpanda & get",
    title: "WEEKLY",
    subtitle: "FREE BET",
    bullets: ["Anonymous", "Zero fees & limits", "VPN Friendly"],
    cta: "Join Now",
    bgFrom: "#0a1a2a",
    bgTo: "#0d2f1f",
  },
  {
    preTitle: "Join Betpanda & Get",
    title: "10% WEEKLY",
    subtitle: "CASHBACK!",
    bullets: ["Anonymous", "Zero fees & limits", "VPN Friendly"],
    cta: "Join Now",
    bgFrom: "#1a0a2a",
    bgTo: "#0d1f2f",
  },
]

export const HeroCarousel = () => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index} className="flex-[0_0_100%] min-w-0">
          <div
            className="relative h-[200px] sm:h-[220px] rounded-xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgTo} 50%, #162a3a 100%)`,
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.03)_0%,transparent_60%)]" />
            <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8">
              <p className="text-xs sm:text-sm text-text-secondary mb-1">{slide.preTitle}</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-text-primary leading-tight">
                {slide.title}
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent leading-tight mb-3">
                {slide.subtitle}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                {slide.bullets.map((bullet) => (
                  <span key={bullet} className="text-[11px] sm:text-xs text-text-secondary flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent text-[8px]">✓</span>
                    </span>
                    {bullet}
                  </span>
                ))}
              </div>
              <button className="bg-accent hover:bg-accent-hover text-bg-main text-sm font-semibold rounded-lg px-5 py-2.5 w-fit flex items-center gap-1 transition-colors">
                {slide.cta} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
