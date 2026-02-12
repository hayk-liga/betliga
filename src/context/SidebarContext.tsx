"use client"

import React, { createContext, useState, useCallback, type ReactNode } from "react"

import { useMediaQuery } from "@/hooks/useMediaQuery"

interface SidebarContextValue {
  isOpen: boolean
  isCollapsed: boolean
  toggle: () => void
  collapse: () => void
  expand: () => void
  close: () => void
}

export const SidebarContext = createContext<SidebarContextValue | null>(null)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")
  const [isOpen, setIsOpen] = useState(!isMobile)
  const [isCollapsed, setIsCollapsed] = useState(isTablet && !isMobile)

  const toggle = useCallback(() => {
    if (isMobile) {
      setIsOpen((prev) => !prev)
    } else {
      setIsCollapsed((prev) => !prev)
    }
  }, [isMobile])

  const collapse = useCallback(() => setIsCollapsed(true), [])
  const expand = useCallback(() => setIsCollapsed(false), [])
  const close = useCallback(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  return (
    <SidebarContext.Provider value={{ isOpen, isCollapsed, toggle, collapse, expand, close }}>
      {children}
    </SidebarContext.Provider>
  )
}
