import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Bell, CreditCard } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"
import ClientSummary from "@/components/client-summary"

export default function Dashboard() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <DashboardHeader />

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Resumen del día</h2>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Sesiones hoy</p>
                  <p className="font-semibold">4</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Clientes activos</p>
                  <p className="font-semibold">12</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Solicitudes</p>
                  <p className="font-semibold">3</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500">Pagos pendientes</p>
                  <p className="font-semibold">2</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Próximas sesiones</h2>
          <Link href="/calendario" className="text-sm text-emerald-600">
            Ver todas
          </Link>
        </div>
        <Card>
          <CardContent className="p-4 space-y-3">
            {[
              { time: "10:00 - 11:00", name: "Ana García", type: "Presencial" },
              { time: "12:30 - 13:30", name: "Carlos Ruiz", type: "Online" },
              { time: "16:00 - 17:00", name: "Laura Méndez", type: "Presencial" },
            ].map((session, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{session.time}</p>
                  <p className="text-sm text-gray-500">{session.name}</p>
                </div>
                <div
                  className={`text-xs px-2 py-1 rounded-full ${
                    session.type === "Online" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"
                  }`}
                >
                  {session.type}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Progreso de clientes</h2>
          <Link href="/clientes" className="text-sm text-emerald-600">
            Ver todos
          </Link>
        </div>
        <div className="space-y-3">
          <ClientSummary
            name="Ana García"
            goal="Pérdida de peso"
            progress={75}
            lastSession="Hace 2 días"
            nextSession="Hoy, 10:00"
          />
          <ClientSummary
            name="Carlos Ruiz"
            goal="Ganancia muscular"
            progress={60}
            lastSession="Hace 3 días"
            nextSession="Hoy, 12:30"
          />
          <ClientSummary
            name="Laura Méndez"
            goal="Tonificación"
            progress={40}
            lastSession="Hace 1 semana"
            nextSession="Hoy, 16:00"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Mensajes recientes</h2>
          <Link href="/chat" className="text-sm text-emerald-600">
            Ver todos
          </Link>
        </div>
        <Card>
          <CardContent className="p-4 space-y-3">
            {[
              { name: "Ana García", message: "¿Podemos cambiar la hora de mañana?", time: "10:23", unread: true },
              { name: "Carlos Ruiz", message: "Gracias por la rutina nueva", time: "Ayer", unread: false },
              { name: "Laura Méndez", message: "Te envié los resultados", time: "Ayer", unread: false },
            ].map((msg, index) => (
              <div key={index} className="flex items-center gap-3 py-2 border-b last:border-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                  {msg.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{msg.name}</p>
                    <p className="text-xs text-gray-500">{msg.time}</p>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{msg.message}</p>
                </div>
                {msg.unread && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
