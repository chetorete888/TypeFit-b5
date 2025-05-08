import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Plus,
  DollarSign,
  Calendar,
  ArrowDown,
  ArrowUp,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function PaymentsPage() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pagos</h1>
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          Nuevo
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="bg-emerald-100 rounded-full p-2 mb-2">
              <ArrowDown className="h-5 w-5 text-emerald-600" />
            </div>
            <span className="font-bold">1.240€</span>
            <span className="text-xs text-gray-500">Ingresos este mes</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className="bg-red-100 rounded-full p-2 mb-2">
              <ArrowUp className="h-5 w-5 text-red-600" />
            </div>
            <span className="font-bold">320€</span>
            <span className="text-xs text-gray-500">Pendientes</span>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Buscar pagos" className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="history">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="history">Historial</TabsTrigger>
          <TabsTrigger value="pending">Pendientes</TabsTrigger>
          <TabsTrigger value="plans">Planes</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <div className="space-y-4">
            {[
              {
                client: "Ana García",
                amount: 180,
                date: "15/05/2023",
                type: "Plan mensual",
                status: "Completado",
              },
              {
                client: "Carlos Ruiz",
                amount: 40,
                date: "12/05/2023",
                type: "Sesión individual",
                status: "Completado",
              },
              {
                client: "Laura Méndez",
                amount: 40,
                date: "10/05/2023",
                type: "Sesión individual",
                status: "Completado",
              },
              {
                client: "Miguel Sánchez",
                amount: 350,
                date: "05/05/2023",
                type: "Bono 10 sesiones",
                status: "Completado",
              },
              {
                client: "Elena Martín",
                amount: 40,
                date: "03/05/2023",
                type: "Sesión individual",
                status: "Completado",
              },
            ].map((payment, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{payment.client}</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{payment.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                      <span className="font-semibold text-emerald-600">{payment.amount}€</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{payment.type}</span>
                    <div className="flex items-center gap-1 text-xs text-emerald-600">
                      <CheckCircle className="h-3 w-3" />
                      <span>{payment.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending">
          <div className="space-y-4">
            {[
              {
                client: "Roberto Fernández",
                amount: 180,
                dueDate: "20/05/2023",
                type: "Plan mensual",
                status: "Pendiente",
              },
              {
                client: "María Torres",
                amount: 140,
                dueDate: "25/05/2023",
                type: "Sesiones (x3)",
                status: "Pendiente",
              },
            ].map((payment, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{payment.client}</h3>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>Vence: {payment.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-red-600" />
                      <span className="font-semibold text-red-600">{payment.amount}€</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{payment.type}</span>
                    <div className="flex items-center gap-1 text-xs text-red-600">
                      <AlertCircle className="h-3 w-3" />
                      <span>{payment.status}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="flex-1">
                      Recordar
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Marcar pagado
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="plans">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="font-semibold">Mis planes</h2>
            <Button size="sm">
              <Plus className="h-3 w-3 mr-1" />
              Crear plan
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Sesión individual",
                price: 40,
                description: "Una sesión de entrenamiento personalizado",
                popular: false,
              },
              {
                name: "Bono 10 sesiones",
                price: 350,
                description: "Pack de 10 sesiones con descuento",
                popular: true,
              },
              {
                name: "Plan mensual",
                price: 180,
                description: "Acceso ilimitado durante un mes",
                popular: false,
              },
              {
                name: "Plan trimestral",
                price: 480,
                description: "Acceso ilimitado durante tres meses",
                popular: false,
              },
            ].map((plan, index) => (
              <Card key={index} className={plan.popular ? "border-emerald-500" : ""}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.description}</p>
                    </div>
                    {plan.popular && (
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-gray-600" />
                      <span className="font-semibold">{plan.price}€</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
