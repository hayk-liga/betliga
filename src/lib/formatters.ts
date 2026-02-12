export const formatCurrency = (value: number, currency = "USD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export const formatCrypto = (value: number, decimals = 8): string => {
  return value.toFixed(decimals)
}

export const formatOdds = (odds: number): string => {
  return odds.toFixed(2)
}

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US").format(value)
}

export const formatPercentage = (value: number): string => {
  const sign = value >= 0 ? "+" : ""
  return `${sign}${value.toFixed(2)}%`
}

export const formatTimeRemaining = (seconds: number): { days: number; hours: number; minutes: number; seconds: number } => {
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return { days, hours, minutes, seconds: secs }
}

export const generatePlaceholderGradient = (name: string): string => {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  const hue1 = Math.abs(hash % 360)
  const hue2 = (hue1 + 40) % 360
  return `linear-gradient(135deg, hsl(${hue1}, 70%, 30%), hsl(${hue2}, 70%, 20%))`
}
