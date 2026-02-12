"use client"

import React, { Suspense, type ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Header } from "@/components/layout/Header"
import { Sidebar } from "@/components/layout/Sidebar"
import { Footer } from "@/components/layout/Footer"
import { MobileNav } from "@/components/layout/MobileNav"
import { LoginModal } from "@/components/auth/LoginModal"
import { SignUpModal } from "@/components/auth/SignUpModal"
import { useSidebar } from "@/hooks/useSidebar"

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { isCollapsed } = useSidebar()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Suspense>
        <Sidebar />
      </Suspense>
      <main
        className={cn(
          "flex-1 mt-14 transition-all duration-300 pb-14 md:pb-0",
          isCollapsed ? "md:ml-14" : "md:ml-[200px]",
        )}
      >
        {children}
        <Footer />
      </main>
      <MobileNav />
      <LoginModal />
      <SignUpModal />
    </div>
  )
}
