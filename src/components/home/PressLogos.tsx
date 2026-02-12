import React from "react"

const logos = [
  { name: "Cointelegraph", prefix: "🔗" },
  { name: "Trustpilot", prefix: "⭐" },
  { name: "AskGamblers", prefix: "" },
  { name: "cryptonews", prefix: "🔵" },
  { name: "Bitcoin.com", prefix: "₿" },
]

export const PressLogos = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="bg-bg-card border border-border rounded-xl px-4 py-4 flex items-center justify-center gap-2 hover:border-accent/20 transition-colors cursor-pointer"
        >
          {logo.prefix && <span className="text-sm">{logo.prefix}</span>}
          <span className="text-sm font-bold text-text-secondary/60 tracking-wide">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  )
}
