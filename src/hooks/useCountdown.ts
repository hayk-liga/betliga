"use client"

import { useState, useEffect, useCallback } from "react"

interface CountdownResult {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export const useCountdown = (targetDate: string): CountdownResult => {
  const calculateTimeLeft = useCallback((): CountdownResult => {
    const difference = new Date(targetDate).getTime() - Date.now()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    }
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState<CountdownResult>(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft])

  return timeLeft
}
