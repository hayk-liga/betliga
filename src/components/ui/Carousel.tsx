"use client"

import React, { useCallback, type ReactNode } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

interface CarouselProps {
  children: ReactNode
  className?: string
  autoplay?: boolean
  showArrows?: boolean
  showDots?: boolean
}

export const Carousel = ({
  children,
  className,
  autoplay = true,
  showArrows = true,
  showDots = true,
}: CarouselProps) => {
  const plugins = autoplay ? [Autoplay({ delay: 5000, stopOnInteraction: false })] : []
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  React.useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  return (
    <div className={cn("relative group", className)}>
      <div ref={emblaRef} className="overflow-hidden rounded-xl">
        <div className="flex">{children}</div>
      </div>
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </>
      )}
      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === selectedIndex ? "bg-accent w-5" : "bg-border w-1.5 hover:bg-text-secondary",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
