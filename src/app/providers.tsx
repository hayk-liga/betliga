"use client"

import React, { type ReactNode } from "react"

import { SidebarProvider } from "@/context/SidebarContext"
import { AuthProvider } from "@/context/AuthContext"
import { MainLayout } from "@/components/layout/MainLayout"

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <SidebarProvider>
        <MainLayout>{children}</MainLayout>
      </SidebarProvider>
    </AuthProvider>
  )
}
