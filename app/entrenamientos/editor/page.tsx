import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, ArrowLeft, Plus, Trash2, GripVertical, Clock, Dumbbell, RotateCcw, User, Video } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function WorkoutEditorPage() {
  return (
    <div className="container px-4 py-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Editor de rutina</h1>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-1" />
          Guardar
        </Button>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-medium">Ana García</h2>
              <p className="text-xs text-gray-500">Pérdida de peso</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium mb-1 block">Nombre de la rutina</label>
              <Input placeholder="Ej: Hipertrofia - Semana 1" defaultValue="Hipertrofia - Ana García" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Tipo</label>
              <Select defaultValue="strength">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strength">Fuerza</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                  <SelectItem value="hiit">HIIT</SelectItem>
                  <SelectItem value="functional">Funcional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Descripción</label>
            <Textarea
              placeholder="Añade una descripción o notas para esta rutina"
              defaultValue="Rutina de hipertrofia enfocada en el tren superior, con énfasis en pecho y espalda."
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold">Ejercicios</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>Duración est.: 60 min</span>
            </div>
          </div>

          <div className="space-y-3">
            {[
              {
                name: "Press de banca",
                sets: 4,
                reps: "8-10",
                rest: "90s",
                weight: "50kg",
              },
              {
                name: "Remo con barra",
                sets: 4,
                reps: "10-12",
                rest: "90s",
                weight: "40kg",
              },
              {
                name: "Press militar",
                sets: 3,
                reps: "10",
                rest: "60s",
                weight: "30kg",
              },
              {
                name: "Curl de bíceps",
                sets: 3,
                reps: "12",
                rest: "60s",
                weight: "15kg",
              },
              {
                name: "Extensiones de tríceps",
                sets: 3,
                reps: "12",
                rest: "60s",
                weight: "15kg",
              },
            ].map((exercise, index) => (
              <Card key={index}>
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-3">
                    <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                    <div className="flex-1">
                      <h3 className="font-medium">{exercise.name}</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Series</label>
                      <Input type="number" className="h-8 text-sm" defaultValue={exercise.sets} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Reps</label>
                      <Input className="h-8 text-sm" defaultValue={exercise.reps} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Descanso</label>
                      <Input className="h-8 text-sm" defaultValue={exercise.rest} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 block mb-1">Peso</label>
                      <Input className="h-8 text-sm" defaultValue={exercise.weight} />
                    </div>
                  </div>

                  <div className="flex justify-between mt-3">
                    <Button variant="outline" size="sm">
                      <Video className="h-3 w-3 mr-1" />
                      Ver técnica
                    </Button>
                    <Button variant="outline" size="sm">
                      <RotateCcw className="h-3 w-3 mr-1" />
                      Alternativas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-1" />
              Añadir ejercicio
            </Button>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold">Opciones</h2>
          </div>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span>Guardar como plantilla</span>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-gray-500" />
                  <span>Permitir sustituciones</span>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span>Temporizador de descanso</span>
                </div>
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
