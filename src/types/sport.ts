export interface SportCategory {
  id: string
  name: string
  icon: string
  count?: number
}

export interface League {
  id: string
  name: string
  country: string
  icon?: string
}
