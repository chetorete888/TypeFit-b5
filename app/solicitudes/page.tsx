import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, MessageSquare, Check, X, Bookmark, Clock } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function RequestsPage() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Solicitudes</h1>
        <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">3 nuevas</div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Buscar solicitudes" className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="new">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="new">Nuevas</TabsTrigger>
          <TabsTrigger value="saved">Guardadas</TabsTrigger>
          <TabsTrigger value="processed">Procesadas</TabsTrigger>
        </TabsList>

        <TabsContent value="new">
          <div className="space-y-4">
            {[
              {
                name: "Javier López",
                time: "Hace 2 días",
                goal: "Pérdida de peso y tonificación",
                availability: "Tardes, L-V",
                location: "Madrid, Centro",
                message:
                  "Hola, estoy interesado en comenzar un programa de entrenamiento para perder peso y tonificar. Tengo disponibilidad por las tardes entre semana.",
              },
              {
                name: "Sofía Rodríguez",
                time: "Hace 3 días",
                goal: "Preparación maratón",
                availability: "Mañanas, fines de semana",
                location: "Madrid, Chamartín",
                message:
                  "Estoy buscando un entrenador que me ayude a prepararme para un maratón en 6 meses. Tengo experiencia corriendo pero nunca he participado en uno.",
              },
              {
                name: "Daniel Martínez",
                time: "Hace 5 días",
                goal: "Ganancia muscular",
                availability: "Noches, L-J",
                location: "Madrid, Salamanca",
                message:
                  "Quiero aumentar mi masa muscular. Llevo 1 año entrenando por mi cuenta pero siento que necesito ayuda profesional para seguir progresando.",
              },
            ].map((request, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{request.name}</h3>
                        <p className="text-xs text-gray-500">{request.time}</p>
                      </div>
                    </div>
                    <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Nueva</div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium min-w-[100px]">Objetivo:</span>
                      <span className="text-gray-600">{request.goal}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium min-w-[100px]">Disponibilidad:</span>
                      <span className="text-gray-600">{request.availability}</span>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <span className="font-medium min-w-[100px]">Ubicación:</span>
                      <span className="text-gray-600">{request.location}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <p className="text-sm text-gray-600">{request.message}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Check className="h-4 w-4 mr-1" />
                      Aceptar
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Chatear
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Marta Gómez</h3>
                      <p className="text-xs text-gray-500">Hace 1 semana</p>
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Guardada</div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium min-w-[100px]">Objetivo:</span>
                    <span className="text-gray-600">Rehabilitación lesión</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium min-w-[100px]">Disponibilidad:</span>
                    <span className="text-gray-600">Mañanas, L-V</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium min-w-[100px]">Ubicación:</span>
                    <span className="text-gray-600">Madrid, Retiro</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-md mb-4">
                  <p className="text-sm text-gray-600">
                    Estoy recuperándome de una lesión en el hombro y necesito ayuda para rehabilitarlo correctamente. Mi
                    fisioterapeuta me recomendó buscar un entrenador personal.
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Check className="h-4 w-4 mr-1" />
                    Aceptar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chatear
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="processed">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Ricardo Blanco</h3>
                      <p className="text-xs text-gray-500">Hace 2 semanas</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Aceptada</div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium min-w-[100px]">Objetivo:</span>
                    <span className="text-gray-600">Fuerza y resistencia</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium min-w-[100px]">Disponibilidad:</span>
                    <span className="text-gray-600">Tardes, M-J</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Procesada el 15/04/2023</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>L</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Lucía Fernández</h3>
                      <p className="text-xs text-gray-500">Hace 3 semanas</p>
                    </div>
                  </div>
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Rechazada</div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium min-w-[100px]">Objetivo:</span>
                    <span className="text-gray-600">Yoga y flexibilidad</span>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium min-w-[100px]">Disponibilidad:</span>
                    <span className="text-gray-600">Mañanas, S-D</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Procesada el 08/04/2023</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
