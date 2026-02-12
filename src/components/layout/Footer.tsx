import React from "react"
import Link from "next/link"

import { footerLinks } from "@/data/mock-nav-items"

const cryptoIcons = ["₿", "◆", "₮", "▼", "✕", "◎", "Ð", "Ł", "🔗", "S"]

const pressLogos = ["Trustpilot", "Cointelegraph", "AskGamblers", "cryptonews", "Bitcoin.com"]

export const Footer = () => {
  return (
    <footer className="bg-bg-sidebar border-t border-border mt-8">
      <div className="px-5 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                <span className="text-bg-main font-bold text-[10px]">BP</span>
              </div>
              <span className="text-sm font-bold">
                Betpanda <span className="text-accent">Liga</span>
              </span>
            </div>
            <p className="text-[11px] text-text-secondary leading-relaxed mb-3">
              Star Bright Media S.R.L<br />
              San Pedro, Barrio Dent, Del Centro Cultural Costarricense Norteamericano.
            </p>
            <p className="text-[11px] text-text-secondary">
              Corporate Identification number:<br />
              3-102-880000
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">Games</h3>
            <div className="flex flex-col gap-1.5">
              {footerLinks.games.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">Platform</h3>
            <div className="flex flex-col gap-1.5">
              {footerLinks.platform.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">Community</h3>
            <div className="flex flex-col gap-1.5">
              {footerLinks.community.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button className="mt-3 border border-accent text-accent text-xs font-medium rounded-lg px-4 py-2 hover:bg-accent hover:text-bg-main transition-all">
              LiveChat
            </button>
          </div>
        </div>

        <div className="border-t border-border pt-5 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <h4 className="text-sm font-semibold text-text-primary">Supported Coins</h4>
            <span className="text-[11px] text-text-secondary">Can&apos;t find your favourite coin? <span className="text-accent cursor-pointer hover:underline">Request here!</span></span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cryptoIcons.map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-border bg-bg-card flex items-center justify-center text-text-secondary text-sm hover:border-accent/30 transition-colors"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-5 mb-5">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {pressLogos.map((name) => (
              <div
                key={name}
                className="bg-bg-card border border-border rounded-xl px-3 py-3 flex items-center justify-center hover:border-accent/20 transition-colors"
              >
                <span className="text-xs font-bold text-text-secondary/50 tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-text-secondary/40">
            &copy; All rights reserved. {new Date().getFullYear()} BetPanda Liga
          </p>
          <div className="flex gap-4 text-[11px] text-text-secondary/40">
            <span>Support support@betpanda.io</span>
            <span>Partners partners@betpanda.io</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
