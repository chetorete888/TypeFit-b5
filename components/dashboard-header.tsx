"use client"

import { useState } from "react"
import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DashboardHeader() {
  const [notifications, setNotifications] = useState(3)

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-emerald-600">TypeFit</h1>
        <p className="text-sm text-gray-500">Bienvenido, Entrenador</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" className="rounded-full">
          <Search className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full relative">
              <Bell className="h-4 w-4" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <span className="font-medium">3 nuevas solicitudes</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="font-medium">2 pagos pendientes</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Entrenador" />
          <AvatarFallback>ET</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
