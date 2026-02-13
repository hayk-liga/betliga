import type { Game } from "@/types/game"
import { generatePlaceholderGradient } from "@/lib/formatters"

const createGame = (id: string, name: string, provider: string, category: Game["category"], options?: Partial<Game>): Game => ({
  id,
  name,
  provider,
  category,
  thumbnail: generatePlaceholderGradient(name),
  players: Math.floor(Math.random() * 500) + 10,
  ...options,
})

export const mockGames: Game[] = [
  createGame("1", "Sweet Bonanza", "Pragmatic Play", "lobby", { isHot: true, rtp: 96.51, players: 342 }),
  createGame("2", "Gates of Olympus", "Pragmatic Play", "lobby", { isHot: true, rtp: 96.50, players: 567 }),
  createGame("3", "Sugar Rush", "Pragmatic Play", "lobby", { isNew: true, rtp: 96.50, players: 189 }),
  createGame("4", "Big Bass Bonanza", "Pragmatic Play", "megaways", { rtp: 96.71, players: 234 }),
  createGame("5", "The Dog House", "Pragmatic Play", "megaways", { rtp: 96.51, players: 156 }),
  createGame("6", "Starlight Princess", "Pragmatic Play", "lobby", { isHot: true, rtp: 96.50, players: 445 }),
  createGame("7", "Book of Dead", "Play'n GO", "lobby", { rtp: 96.21, players: 312 }),
  createGame("8", "Reactoonz", "Play'n GO", "grid", { rtp: 96.51, players: 178 }),
  createGame("9", "Fire Joker", "Play'n GO", "lobby", { rtp: 96.15, players: 95 }),
  createGame("10", "Moon Princess", "Play'n GO", "grid", { isNew: true, rtp: 96.20, players: 267 }),
  createGame("11", "Gonzo's Quest", "NetEnt", "lobby", { rtp: 95.97, players: 198 }),
  createGame("12", "Starburst", "NetEnt", "lobby", { rtp: 96.09, players: 423 }),
  createGame("13", "Dead or Alive 2", "NetEnt", "lobby", { rtp: 96.82, players: 145 }),
  createGame("14", "Divine Fortune", "NetEnt", "jackpot", { rtp: 96.59, players: 89 }),
  createGame("15", "Mega Fortune", "NetEnt", "jackpot", { rtp: 96.60, players: 234 }),
  createGame("16", "Chicken Crossing", "BetPanda", "originals", { rtp: 97.00, players: 456 }),
  createGame("17", "Panda Mines", "BetPanda", "originals", { rtp: 97.00, players: 321 }),
  createGame("18", "Plinko", "BetPanda", "originals", { rtp: 97.00, players: 543 }),
  createGame("19", "Crash", "BetPanda", "originals", { rtp: 97.00, players: 678 }),
  createGame("20", "Keno", "BetPanda", "originals", { rtp: 97.00, players: 112 }),
  createGame("21", "Dice", "BetPanda", "originals", { rtp: 97.00, players: 87 }),
  createGame("22", "Hilo", "BetPanda", "originals", { rtp: 97.00, players: 156 }),
  createGame("23", "Blackjack Classic", "Evolution", "table-games", { isLive: true, players: 234 }),
  createGame("24", "Roulette Live", "Evolution", "table-games", { isLive: true, players: 567 }),
  createGame("25", "Baccarat Squeeze", "Evolution", "table-games", { isLive: true, players: 123 }),
  createGame("26", "Lightning Roulette", "Evolution", "game-shows", { isLive: true, players: 890, isHot: true }),
  createGame("27", "Crazy Time", "Evolution", "game-shows", { isLive: true, players: 1200, isHot: true }),
  createGame("28", "Monopoly Live", "Evolution", "game-shows", { isLive: true, players: 456 }),
  createGame("29", "Dream Catcher", "Evolution", "game-shows", { isLive: true, players: 321 }),
  createGame("30", "Deal or No Deal", "Evolution", "game-shows", { isLive: true, players: 654 }),
  createGame("31", "Wolf Gold", "Pragmatic Play", "hold-and-win", { rtp: 96.01, players: 278 }),
  createGame("32", "John Hunter", "Pragmatic Play", "hold-and-win", { rtp: 96.11, players: 134 }),
  createGame("33", "Mustang Gold", "Pragmatic Play", "hold-and-win", { rtp: 96.53, players: 189 }),
  createGame("34", "Hot to Burn", "Pragmatic Play", "hold-and-win", { isNew: true, rtp: 96.70, players: 245 }),
  createGame("35", "Aztec Gems", "Pragmatic Play", "provably-fair", { rtp: 96.52, players: 167 }),
  createGame("36", "Lucky Lightning", "Pragmatic Play", "buy-feature", { rtp: 96.45, players: 198 }),
  createGame("37", "Fruit Party", "Pragmatic Play", "buy-feature", { isNew: true, rtp: 96.47, players: 312 }),
  createGame("38", "Extra Juicy", "Pragmatic Play", "megaways", { rtp: 96.52, players: 145 }),
  createGame("39", "Wild West Gold", "Pragmatic Play", "megaways", { rtp: 96.51, players: 267 }),
  createGame("40", "VIP Blackjack", "Evolution", "vip-tables", { isLive: true, players: 45 }),
  createGame("41", "VIP Roulette", "Evolution", "vip-tables", { isLive: true, players: 32 }),
  createGame("42", "Speed Baccarat", "Evolution", "baccarat", { isLive: true, players: 178 }),
  createGame("43", "Auto Roulette", "Evolution", "roulette", { isLive: true, players: 445 }),
  createGame("44", "Infinite Blackjack", "Evolution", "blackjack", { isLive: true, players: 890 }),
  createGame("45", "Super Sic Bo", "Evolution", "dice", { isLive: true, players: 234 }),
  createGame("46", "Bonanza Megaways", "Big Time Gaming", "megaways", { rtp: 96.00, players: 356 }),
  createGame("47", "White Rabbit", "Big Time Gaming", "megaways", { rtp: 97.72, players: 189 }),
  createGame("48", "Buffalo King", "Pragmatic Play", "lobby", { rtp: 96.06, players: 267 }),
  createGame("49", "Rise of Giza", "Pragmatic Play", "lobby", { isNew: true, rtp: 96.50, players: 198 }),
  createGame("50", "Floating Dragon", "Pragmatic Play", "hold-and-win", { rtp: 96.71, players: 312 }),
  createGame("51", "Madame Destiny", "Pragmatic Play", "lobby", { rtp: 96.52, players: 145 }),
  createGame("52", "Gems Bonanza", "Pragmatic Play", "grid", { rtp: 96.51, players: 234 }),
  createGame("53", "Power of Thor", "Pragmatic Play", "buy-feature", { rtp: 96.55, players: 178 }),
  createGame("54", "Treasure Wild", "Pragmatic Play", "buy-feature", { rtp: 96.49, players: 112 }),
  createGame("55", "Hand of Midas", "Pragmatic Play", "lobby", { rtp: 96.54, players: 289 }),
  createGame("56", "Texas Hold'em Poker", "Evolution", "poker", { isLive: true, players: 345 }),
  createGame("57", "Caribbean Stud", "Evolution", "poker", { isLive: true, players: 189 }),
  createGame("58", "Three Card Poker", "Evolution", "poker", { players: 234 }),
  createGame("59", "Golden Fish Tank", "Yggdrasil", "fishing", { players: 156, isNew: true }),
  createGame("60", "Fishin Frenzy", "Blueprint", "fishing", { players: 278, isHot: true }),
  createGame("61", "Big Bass Splash", "Pragmatic Play", "fishing", { players: 345 }),
  createGame("62", "Electronic Roulette", "Evolution", "electronic", { players: 234 }),
  createGame("63", "Electronic Blackjack", "Evolution", "electronic", { players: 178 }),
  createGame("64", "Crypto Futures", "BetPanda", "futures", { players: 567 }),
  createGame("65", "BTC Predictor", "BetPanda", "futures", { players: 432 }),
  createGame("66", "Slots Megaways", "Pragmatic Play", "slots", { players: 289, isHot: true }),
  createGame("67", "Lucky Slots", "NetEnt", "slots", { players: 345, isNew: true }),
  createGame("68", "Gold Rush Slots", "Play'n GO", "slots", { players: 198 }),
]

export const getGamesByCategory = (category: Game["category"]): Game[] =>
  mockGames.filter((game) => game.category === category)

export const getGamesOfTheWeek = (): Game[] =>
  mockGames.filter((game) => game.isHot).slice(0, 8)

export const getNewGames = (): Game[] =>
  mockGames.filter((game) => game.isNew).slice(0, 8)

export const getOriginals = (): Game[] =>
  mockGames.filter((game) => game.category === "originals")

export const getLiveCasinoGames = (): Game[] =>
  mockGames.filter((game) => game.isLive)

export const getTopLiveGames = (): Game[] =>
  mockGames.filter((game) => game.isLive && game.players && game.players > 200).slice(0, 6)

export const getSlotGames = (): Game[] =>
  mockGames.filter((game) => game.category === "slots" || game.category === "lobby" || game.category === "megaways")

export const getPokerGames = (): Game[] =>
  mockGames.filter((game) => game.category === "poker")

export const getFishingGames = (): Game[] =>
  mockGames.filter((game) => game.category === "fishing")

export const getElectronicGames = (): Game[] =>
  mockGames.filter((game) => game.category === "electronic")

export const getFuturesGames = (): Game[] =>
  mockGames.filter((game) => game.category === "futures")

export const getTableGames = (): Game[] =>
  mockGames.filter((game) => game.category === "table-games" || game.category === "blackjack" || game.category === "roulette" || game.category === "baccarat")

export const getHotGames = (): Game[] =>
  mockGames.filter((game) => game.isHot)

export const getRecentGames = (): Game[] =>
  mockGames.slice(0, 12)
