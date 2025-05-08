import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter, Dumbbell, Users, BookMarked, ArrowRight } from "lucide-react"
import WorkoutCard from "@/components/workout-card"
import ExerciseCard from "@/components/exercise-card"

export default function WorkoutsPage() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Entrenamientos</h1>
        <Button>
          <Plus className="h-4 w-4 mr-1" />
          Crear
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Buscar entrenamientos" className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="workouts">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="workouts">
            <Dumbbell className="h-4 w-4 mr-1" />
            Rutinas
          </TabsTrigger>
          <TabsTrigger value="templates">
            <BookMarked className="h-4 w-4 mr-1" />
            Plantillas
          </TabsTrigger>
          <TabsTrigger value="exercises">
            <Dumbbell className="h-4 w-4 mr-1" />
            Ejercicios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="workouts">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Rutinas activas</h2>
              <Link href="/entrenamientos/activas" className="text-sm text-emerald-600 flex items-center">
                Ver todas
                <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>

            <div className="space-y-3">
              <WorkoutCard
                title="Hipertrofia - Ana García"
                type="Fuerza"
                exercises={8}
                duration="60 min"
                client="Ana García"
                lastUpdated="Hace 2 días"
              />
              <WorkoutCard
                title="Pérdida de peso - Carlos Ruiz"
                type="Cardio"
                exercises={10}
                duration="45 min"
                client="Carlos Ruiz"
                lastUpdated="Hace 3 días"
              />
              <WorkoutCard
                title="Tonificación - Laura Méndez"
                type="Funcional"
                exercises={12}
                duration="50 min"
                client="Laura Méndez"
                lastUpdated="Hace 1 semana"
              />
            </div>

            <div className="flex justify-between items-center mt-6">
              <h2 className="font-semibold">Plantillas recientes</h2>
              <Link href="/entrenamientos/plantillas" className="text-sm text-emerald-600 flex items-center">
                Ver todas
                <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>

            <div className="space-y-3">
              <WorkoutCard
                title="Full Body - Principiantes"
                type="Fuerza"
                exercises={8}
                duration="45 min"
                client=""
                lastUpdated="Hace 1 mes"
              />
              <WorkoutCard
                title="HIIT - Intermedio"
                type="Cardio"
                exercises={12}
                duration="30 min"
                client=""
                lastUpdated="Hace 2 meses"
              />
              <WorkoutCard
                title="Push Pull Legs - Avanzado"
                type="Fuerza"
                exercises={15}
                duration="75 min"
                client=""
                lastUpdated="Hace 3 meses"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <BookMarked className="h-8 w-8 text-emerald-600 mb-2" />
                <h3 className="font-medium text-sm">Crear plantilla</h3>
                <p className="text-xs text-gray-500">Diseña una nueva plantilla</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Users className="h-8 w-8 text-gray-400 mb-2" />
                <h3 className="font-medium text-sm">Importar</h3>
                <p className="text-xs text-gray-500">Desde la comunidad</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Mis plantillas</h2>
              <Button variant="ghost" size="sm">
                <Filter className="h-3 w-3 mr-1" />
                Filtrar
              </Button>
            </div>

            <div className="space-y-3">
              <WorkoutCard
                title="Full Body - Principiantes"
                type="Fuerza"
                exercises={8}
                duration="45 min"
                client=""
                lastUpdated="Hace 1 mes"
              />
              <WorkoutCard
                title="HIIT - Intermedio"
                type="Cardio"
                exercises={12}
                duration="30 min"
                client=""
                lastUpdated="Hace 2 meses"
              />
              <WorkoutCard
                title="Push Pull Legs - Avanzado"
                type="Fuerza"
                exercises={15}
                duration="75 min"
                client=""
                lastUpdated="Hace 3 meses"
              />
              <WorkoutCard
                title="Circuito Metabólico"
                type="Funcional"
                exercises={10}
                duration="40 min"
                client=""
                lastUpdated="Hace 3 meses"
              />
              <WorkoutCard
                title="Entrenamiento en Casa"
                type="Peso corporal"
                exercises={8}
                duration="30 min"
                client=""
                lastUpdated="Hace 4 meses"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="exercises">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Biblioteca de ejercicios</h2>
              <Button size="sm">
                <Plus className="h-3 w-3 mr-1" />
                Añadir
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Card className="bg-gray-50">
                <CardContent className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-200 w-full h-24 rounded-md mb-2 flex items-center justify-center">
                      <Dumbbell className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-sm">Piernas</h3>
                    <p className="text-xs text-gray-500">32 ejercicios</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-200 w-full h-24 rounded-md mb-2 flex items-center justify-center">
                      <Dumbbell className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-sm">Pecho</h3>
                    <p className="text-xs text-gray-500">24 ejercicios</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-200 w-full h-24 rounded-md mb-2 flex items-center justify-center">
                      <Dumbbell className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-sm">Espalda</h3>
                    <p className="text-xs text-gray-500">28 ejercicios</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-200 w-full h-24 rounded-md mb-2 flex items-center justify-center">
                      <Dumbbell className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-medium text-sm">Hombros</h3>
                    <p className="text-xs text-gray-500">18 ejercicios</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold mb-3">Ejercicios recientes</h2>
              <div className="space-y-3">
                <ExerciseCard name="Sentadilla con barra" muscle="Piernas" equipment="Barra" difficulty="Intermedio" />
                <ExerciseCard name="Press de banca" muscle="Pecho" equipment="Barra" difficulty="Intermedio" />
                <ExerciseCard name="Peso muerto" muscle="Espalda" equipment="Barra" difficulty="Avanzado" />
                <ExerciseCard name="Press militar" muscle="Hombros" equipment="Barra" difficulty="Intermedio" />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
