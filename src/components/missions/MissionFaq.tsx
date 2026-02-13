"use client"

import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "How do missions work?",
    answer: "Complete daily and weekly tasks to earn rewards. Progress is tracked automatically and rewards can be collected once a mission is completed.",
  },
  {
    question: "When do daily missions reset?",
    answer: "Daily missions reset every day at 00:00 UTC. Make sure to complete and claim your rewards before the reset.",
  },
  {
    question: "Can I stack daily and weekly missions?",
    answer: "Yes! You can work on both daily and weekly missions simultaneously. All rewards are additive.",
  },
  {
    question: "How do I claim my rewards?",
    answer: "Once a mission is completed, click the 'Collect' button on the mission card. Rewards are instantly credited to your account.",
  },
]

export const MissionFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-6">
      <h2 className="text-sm font-bold text-text-primary mb-3">FAQ</h2>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-bg-card border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-4 py-3 text-left"
            >
              <span className="text-sm font-medium text-text-primary">{faq.question}</span>
              <ChevronDown
                size={16}
                className={cn(
                  "text-text-secondary transition-transform",
                  openIndex === index && "rotate-180",
                )}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3">
                <p className="text-xs text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
