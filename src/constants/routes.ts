export const ROUTES = {
  HOME: "/",
  CASINO: "/casino",
  LIVE_CASINO: "/live-casino",
  SPORTS: "/sports",
  ESPORTS: "/esports",
  PROMOTIONS: "/promotions",
} as const

export type RouteKey = keyof typeof ROUTES
export type RouteValue = (typeof ROUTES)[RouteKey]
