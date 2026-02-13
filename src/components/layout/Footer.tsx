import React from "react"
import Link from "next/link"

import { footerLinks } from "@/data/mock-nav-items"

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Discord", href: "#" },
  { label: "Instagram", href: "#" },
]

export const Footer = () => {
  return (
    <footer className="bg-bg-sidebar border-t border-border mt-8">
      <div className="px-5 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">PLATFORM</h3>
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
            <h3 className="text-sm font-semibold text-text-primary mb-3">ABOUT US</h3>
            <div className="flex flex-col gap-1.5">
              {footerLinks.about.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-text-secondary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3">FOLLOW US</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-text-secondary hover:text-accent transition-colors border border-border rounded-lg px-3 py-1.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">BP</span>
            </div>
            <span className="text-sm font-bold text-text-primary">
              Betpanda <span className="text-accent">Liga</span>
            </span>
          </div>
          <p className="text-[11px] text-text-secondary/60">
            &copy; {new Date().getFullYear()} BetPanda Liga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
