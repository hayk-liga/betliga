import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/app/globals.css"
import { Providers } from "@/app/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BetPanda Liga - Crypto Casino & Sportsbook",
  description: "The ultimate crypto casino and sportsbook. Play with 30+ cryptocurrencies and enjoy industry-leading cashback.",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
