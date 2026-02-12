import React from "react"

const steps = [
  { number: "01", label: "Register an account" },
  { number: "02", label: "Make a Deposit & Play" },
  { number: "03", label: "Get 10% Weekly Cashback" },
]

export const StepProgressBar = () => {
  return (
    <div className="bg-bg-card/50 rounded-xl px-4 py-3 flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-accent font-bold text-sm">{step.number}</span>
            <span className="text-xs sm:text-sm text-text-secondary">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 mx-3 sm:mx-6">
              <div className="h-[2px] bg-gradient-to-r from-accent/40 to-accent/10 rounded-full" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
