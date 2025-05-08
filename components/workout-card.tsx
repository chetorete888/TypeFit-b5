import { Card, CardContent } from "@/components/ui/card"
import { Clock, Dumbbell, User, Calendar } from "lucide-react"

interface WorkoutCardProps {
  title: string
  type: string
  exercises: number
  duration: string
  client: string
  lastUpdated: string
}

export default function WorkoutCard({ title, type, exercises, duration, client, lastUpdated }: WorkoutCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{type}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-2">
          <div className="flex items-center">
            <Dumbbell className="h-3 w-3 mr-1" />
            <span>{exercises} ejercicios</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{duration}</span>
          </div>
          {client && (
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              <span>{client}</span>
            </div>
          )}
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{lastUpdated}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
