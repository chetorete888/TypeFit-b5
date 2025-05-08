"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { User, Dumbbell, Users, Calendar, MessageSquare, CreditCard, BellDot, Home, Settings } from "lucide-react"

export default function MobileNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Inicio" },
    { href: "/perfil", icon: User, label: "Perfil" },
    { href: "/entrenamientos", icon: Dumbbell, label: "Entrenamientos" },
    { href: "/clientes", icon: Users, label: "Clientes" },
    { href: "/calendario", icon: Calendar, label: "Agenda" },
    { href: "/chat", icon: MessageSquare, label: "Chat" },
    { href: "/pagos", icon: CreditCard, label: "Pagos" },
    { href: "/solicitudes", icon: BellDot, label: "Solicitudes" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.slice(0, 5).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full text-xs ${
              pathname === item.href ? "text-emerald-600 dark:text-emerald-500" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span>{item.label}</span>
          </Link>
        ))}
        <Link
          href="/mas"
          className="flex flex-col items-center justify-center w-full h-full text-xs text-gray-500 dark:text-gray-400"
        >
          <Settings className="h-5 w-5 mb-1" />
          <span>Más</span>
        </Link>
      </div>
    </div>
  )
}
