import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Calendar, TrendingUp, MessageSquare, MoreVertical, Dumbbell } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ClientCardProps {
  name: string
  goal: string
  progress: number
  nextSession: string
  adherence: number
  inactive?: boolean
}

export default function ClientCard({
  name,
  goal,
  progress,
  nextSession,
  adherence,
  inactive = false,
}: ClientCardProps) {
  return (
    <Card className={inactive ? "opacity-70" : ""}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-medium">{name}</h3>
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{goal}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <MessageSquare className="h-4 w-4 mr-2" />
                Enviar mensaje
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Dumbbell className="h-4 w-4 mr-2" />
                Ver entrenamientos
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Calendar className="h-4 w-4 mr-2" />
                Programar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progreso</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1 text-gray-500" />
            <span>{nextSession}</span>
          </div>
          <div className="flex items-center">
            <TrendingUp className="h-3 w-3 mr-1 text-gray-500" />
            <span>Adherencia: {adherence}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
