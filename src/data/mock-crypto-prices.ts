import type { CryptoPrice } from "@/types/crypto"

export const mockCryptoPrices: CryptoPrice[] = [
  { symbol: "BTC", name: "Bitcoin", price: 97234.56, change24h: 2.34, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 3456.78, change24h: -1.23, icon: "Ξ" },
  { symbol: "USDT", name: "Tether", price: 1.00, change24h: 0.01, icon: "₮" },
  { symbol: "BNB", name: "BNB", price: 678.90, change24h: 3.45, icon: "B" },
  { symbol: "SOL", name: "Solana", price: 198.45, change24h: 5.67, icon: "◎" },
  { symbol: "XRP", name: "XRP", price: 2.34, change24h: -0.56, icon: "✕" },
  { symbol: "DOGE", name: "Dogecoin", price: 0.3456, change24h: 8.90, icon: "Ð" },
  { symbol: "ADA", name: "Cardano", price: 0.987, change24h: -2.34, icon: "₳" },
  { symbol: "TRX", name: "TRON", price: 0.234, change24h: 1.23, icon: "T" },
  { symbol: "LTC", name: "Litecoin", price: 98.76, change24h: -0.45, icon: "Ł" },
  { symbol: "DOT", name: "Polkadot", price: 7.89, change24h: 4.56, icon: "●" },
  { symbol: "MATIC", name: "Polygon", price: 0.876, change24h: -3.21, icon: "M" },
  { symbol: "SHIB", name: "Shiba Inu", price: 0.0000234, change24h: 12.34, icon: "S" },
  { symbol: "AVAX", name: "Avalanche", price: 34.56, change24h: 2.10, icon: "A" },
  { symbol: "LINK", name: "Chainlink", price: 15.67, change24h: -1.89, icon: "⬡" },
]
