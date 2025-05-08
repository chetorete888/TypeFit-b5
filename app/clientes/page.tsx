import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Users, UserPlus, TrendingUp, Calendar } from "lucide-react"
import ClientCard from "@/components/client-card"

export default function ClientsPage() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <Button>
          <UserPlus className="h-4 w-4 mr-1" />
          Añadir
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Buscar clientes" className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <Card>
          <CardContent className="p-3 flex flex-col items-center justify-center text-center">
            <div className="bg-emerald-100 rounded-full p-2 mb-2">
              <Users className="h-5 w-5 text-emerald-600" />
            </div>
            <span className="font-bold">12</span>
            <span className="text-xs text-gray-500">Activos</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 flex flex-col items-center justify-center text-center">
            <div className="bg-blue-100 rounded-full p-2 mb-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <span className="font-bold">85%</span>
            <span className="text-xs text-gray-500">Adherencia</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3 flex flex-col items-center justify-center text-center">
            <div className="bg-purple-100 rounded-full p-2 mb-2">
              <Calendar className="h-5 w-5 text-purple-600" />
            </div>
            <span className="font-bold">24</span>
            <span className="text-xs text-gray-500">Sesiones</span>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="active">Activos</TabsTrigger>
          <TabsTrigger value="pending">Pendientes</TabsTrigger>
          <TabsTrigger value="inactive">Inactivos</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="space-y-3">
            <ClientCard
              name="Ana García"
              goal="Pérdida de peso"
              progress={75}
              nextSession="Hoy, 10:00"
              adherence={90}
            />
            <ClientCard
              name="Carlos Ruiz"
              goal="Ganancia muscular"
              progress={60}
              nextSession="Hoy, 12:30"
              adherence={85}
            />
            <ClientCard name="Laura Méndez" goal="Tonificación" progress={40} nextSession="Hoy, 16:00" adherence={70} />
            <ClientCard name="Miguel Sánchez" goal="Fuerza" progress={80} nextSession="Mañana, 11:00" adherence={95} />
            <ClientCard
              name="Elena Martín"
              goal="Rehabilitación"
              progress={30}
              nextSession="Mañana, 17:30"
              adherence={65}
            />
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="space-y-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">Javier López</h3>
                    <p className="text-xs text-gray-500">Solicitud recibida hace 2 días</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pendiente</span>
                </div>
                <div className="mb-3">
                  <p className="text-sm text-gray-600">Objetivo: Pérdida de peso y tonificación</p>
                  <p className="text-sm text-gray-600">Disponibilidad: Tardes, L-V</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Aceptar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Chatear
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">Sofía Rodríguez</h3>
                    <p className="text-xs text-gray-500">Solicitud recibida hace 3 días</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Pendiente</span>
                </div>
                <div className="mb-3">
                  <p className="text-sm text-gray-600">Objetivo: Preparación maratón</p>
                  <p className="text-sm text-gray-600">Disponibilidad: Mañanas, fines de semana</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Aceptar
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Chatear
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inactive">
          <div className="space-y-3">
            <ClientCard
              name="Roberto Fernández"
              goal="Pérdida de peso"
              progress={20}
              nextSession="No programada"
              adherence={30}
              inactive={true}
            />
            <ClientCard
              name="María Torres"
              goal="Tonificación"
              progress={15}
              nextSession="No programada"
              adherence={25}
              inactive={true}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
