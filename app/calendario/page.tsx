import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Plus, CalendarIcon, Clock, User, MapPin, Video } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalendarPage() {
  // Datos de ejemplo para el calendario
  const currentMonth = "Mayo 2023"
  const weekDays = ["L", "M", "X", "J", "V", "S", "D"]
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1)

  // Datos de ejemplo para las sesiones
  const sessions = [
    {
      time: "10:00 - 11:00",
      client: "Ana García",
      type: "Presencial",
      location: "Gimnasio FitPro",
    },
    {
      time: "12:30 - 13:30",
      client: "Carlos Ruiz",
      type: "Online",
      location: "",
    },
    {
      time: "16:00 - 17:00",
      client: "Laura Méndez",
      type: "Presencial",
      location: "Parque Retiro",
    },
    {
      time: "18:30 - 19:30",
      client: "Miguel Sánchez",
      type: "Presencial",
      location: "Gimnasio FitPro",
    },
  ]

  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Calendario</h1>
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          Nueva sesión
        </Button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="font-semibold">{currentMonth}</h2>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Select defaultValue="week">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Vista" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Día</SelectItem>
            <SelectItem value="week">Semana</SelectItem>
            <SelectItem value="month">Mes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day, index) => (
              <div key={index} className="text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {monthDays.map((day, index) => {
              const isToday = day === 15 // Ejemplo: día actual
              const hasSession = [15, 16, 18, 20, 22, 25].includes(day) // Días con sesiones

              return (
                <div
                  key={index}
                  className={`
                    aspect-square flex items-center justify-center rounded-full text-sm
                    ${isToday ? "bg-emerald-600 text-white" : ""}
                    ${hasSession && !isToday ? "text-emerald-600 font-medium" : ""}
                    ${day < 15 ? "text-gray-400" : ""}
                    hover:bg-gray-100 cursor-pointer
                  `}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-emerald-600" />
            <h2 className="font-semibold">Hoy, 15 de Mayo</h2>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="h-3 w-3 mr-1" />
            Añadir
          </Button>
        </div>

        <div className="space-y-3">
          {sessions.map((session, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{session.client}</span>
                    </div>
                  </div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      session.type === "Online" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {session.type}
                  </div>
                </div>

                {session.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{session.location}</span>
                  </div>
                )}

                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="flex-1">
                    Detalles
                  </Button>
                  {session.type === "Online" && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Video className="h-3 w-3 mr-1" />
                      Iniciar
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-emerald-600" />
            <h2 className="font-semibold">Próximos días</h2>
          </div>
        </div>

        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Mañana, 16 de Mayo</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="text-sm">09:00 - 10:00</span>
                  </div>
                  <span className="text-sm">Elena Martín</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="text-sm">11:30 - 12:30</span>
                  </div>
                  <span className="text-sm">Roberto Fernández</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Miércoles, 17 de Mayo</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-1 border-b">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="text-sm">10:00 - 11:00</span>
                  </div>
                  <span className="text-sm">Ana García</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="text-sm">16:00 - 17:00</span>
                  </div>
                  <span className="text-sm">Laura Méndez</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-gray-500" />
                    <span className="text-sm">18:30 - 19:30</span>
                  </div>
                  <span className="text-sm">Miguel Sánchez</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
