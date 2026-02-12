export interface Promotion {
  id: string
  title: string
  description: string
  image: string
  category: "casino" | "sports" | "general"
  ctaText: string
  ctaHref: string
  badge?: string
  gradient: string
}
