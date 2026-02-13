"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"

const UserManagementPage = () => {
  return (
    <div className="px-4 sm:px-5 py-4">
      <div className="flex items-center gap-3 mb-5">
        <Link
          href="/"
          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/30 transition-colors"
        >
          <ArrowLeft size={16} />
        </Link>
        <h1 className="text-lg font-bold text-text-primary">User Management</h1>
      </div>
      <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
        <Users size={48} className="text-accent mx-auto mb-4" />
        <h2 className="text-xl font-bold text-text-primary mb-2">User Management</h2>
        <p className="text-text-secondary">Manage your profile, security settings, and preferences.</p>
      </div>
    </div>
  )
}

export default UserManagementPage
