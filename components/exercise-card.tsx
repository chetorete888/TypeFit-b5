import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, ChevronRight } from "lucide-react"

interface ExerciseCardProps {
  name: string
  muscle: string
  equipment: string
  difficulty: string
}

export default function ExerciseCard({ name, muscle, equipment, difficulty }: ExerciseCardProps) {
  return (
    <Card>
      <CardContent className="p-3 flex items-center">
        <div className="bg-gray-100 h-12 w-12 rounded-md flex items-center justify-center mr-3">
          <Dumbbell className="h-6 w-6 text-gray-500" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm">{name}</h3>
          <div className="flex text-xs text-gray-500">
            <span>{muscle}</span>
            <span className="mx-1">•</span>
            <span>{equipment}</span>
            <span className="mx-1">•</span>
            <span>{difficulty}</span>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-gray-400" />
      </CardContent>
    </Card>
  )
}
