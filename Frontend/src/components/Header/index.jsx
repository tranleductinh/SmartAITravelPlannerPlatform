import React from 'react'
import { Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const Header = () => {
  return (
      <header className="fixed top-0 right-0 left-0 z-50 h-16 border-b border-outline-variant/20 bg-white/92 px-7 backdrop-blur-md md:left-64">
      <div className="mx-auto flex h-full max-w-[1920px] items-center justify-between gap-6">
        <div className="flex min-w-0 items-center gap-3">
          <h1 className="shrink-0 font-heading text-[1.05rem] font-extrabold tracking-tight text-teal-800">
            Voyager AI
          </h1>

          <div className="hidden min-w-0 items-center gap-2 text-sm font-medium text-on-surface-variant lg:flex">
            <span>/</span>
            <span>Traveler</span>
            <span>/</span>
            <span className="truncate text-teal-700">Traveler Dashboard</span>
          </div>

          <div className="min-w-0 lg:hidden">
            <p className="truncate text-sm font-semibold text-teal-700">
              Traveler Dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
            <Input
              type="text"
              placeholder="Search in traveler pages..."
              className="h-11 w-72 rounded-full border border-outline-variant/30 bg-surface-container-low px-11 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:border-primary/25 focus-visible:ring-2 focus-visible:ring-primary/15"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative h-10 w-10 rounded-full text-on-surface-variant hover:bg-surface-container-low"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-[11px] top-[10px] h-2 w-2 rounded-full bg-red-500" />
          </Button>

          <Avatar className="h-9 w-9 border border-outline-variant/30 bg-surface-container-low">
            <AvatarFallback className="text-xs font-bold text-teal-800">
              T
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default Header
