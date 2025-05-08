import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Award, FileText, Edit, Eye, Clock, DollarSign } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-1" />
            Vista pública
          </Button>
          <Button size="sm">
            <Edit className="h-4 w-4 mr-1" />
            Editar
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center mb-6">
        <Avatar className="h-24 w-24 mb-3">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Entrenador" />
          <AvatarFallback className="text-2xl">ET</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold">Carlos Martínez</h2>
        <p className="text-gray-500">Entrenador Personal</p>
        <div className="flex items-center mt-1">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="ml-1 text-sm">(24 reseñas)</span>
        </div>
      </div>

      <Tabs defaultValue="info">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="info">Información</TabsTrigger>
          <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
          <TabsTrigger value="reviews">Reseñas</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Biografía</h3>
              <p className="text-sm text-gray-600 mb-4">
                Entrenador personal certificado con más de 8 años de experiencia. Especializado en pérdida de peso,
                ganancia muscular y preparación para competiciones. Mi enfoque se basa en crear planes personalizados
                que se adapten a las necesidades y objetivos de cada cliente.
              </p>

              <h3 className="font-semibold mb-2">Especialidades</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Pérdida de peso</Badge>
                <Badge variant="secondary">Hipertrofia</Badge>
                <Badge variant="secondary">Fuerza</Badge>
                <Badge variant="secondary">Nutrición deportiva</Badge>
                <Badge variant="secondary">Rehabilitación</Badge>
              </div>

              <h3 className="font-semibold mb-2">Experiencia</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-sm">Gimnasio FitPro</span>
                  <span className="text-sm text-gray-500">2018 - Presente</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Centro Deportivo Elite</span>
                  <span className="text-sm text-gray-500">2015 - 2018</span>
                </div>
              </div>

              <h3 className="font-semibold mb-2">Disponibilidad</h3>
              <div className="flex items-center mb-4">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Lunes a Viernes: 8:00 - 20:00</span>
              </div>

              <h3 className="font-semibold mb-2">Precios</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Sesión individual</span>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">40€</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Bono 10 sesiones</span>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">350€</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Plan mensual</span>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">180€</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="font-semibold">Mis Certificaciones</h3>
            <Button size="sm">
              <FileText className="h-4 w-4 mr-1" />
              Añadir
            </Button>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Certificado en Entrenamiento Personal",
                issuer: "NSCA",
                date: "2015",
                icon: Award,
              },
              {
                title: "Especialista en Nutrición Deportiva",
                issuer: "ISSA",
                date: "2017",
                icon: Award,
              },
              {
                title: "Entrenador de Fuerza y Acondicionamiento",
                issuer: "ACSM",
                date: "2019",
                icon: Award,
              },
              {
                title: "Especialista en Rehabilitación Deportiva",
                issuer: "NASM",
                date: "2020",
                icon: Award,
              },
            ].map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <cert.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{cert.title}</h4>
                    <p className="text-xs text-gray-500">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Ver
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Reseñas de Clientes</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 font-medium">4.9</span>
                <span className="text-sm text-gray-500 ml-1">(24)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Ana García",
                date: "Hace 2 semanas",
                rating: 5,
                comment:
                  "Carlos es un excelente entrenador. Gracias a él he conseguido mis objetivos en menos tiempo del esperado. Muy profesional y atento.",
              },
              {
                name: "Miguel Sánchez",
                date: "Hace 1 mes",
                rating: 5,
                comment:
                  "Llevo 3 meses entrenando con Carlos y los resultados son increíbles. Sus rutinas son desafiantes pero efectivas.",
              },
              {
                name: "Laura Pérez",
                date: "Hace 2 meses",
                rating: 4,
                comment:
                  "Muy buen entrenador, conoce muy bien su trabajo y sabe adaptarse a las necesidades de cada persona.",
              },
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
