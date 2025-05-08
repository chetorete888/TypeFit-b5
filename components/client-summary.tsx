import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ClientSummaryProps {
  name: string
  goal: string
  progress: number
  lastSession: string
  nextSession: string
}

export default function ClientSummary({ name, goal, progress, lastSession, nextSession }: ClientSummaryProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium">{name}</h3>
          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">{goal}</span>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progreso</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
          <div>
            <span className="block">Última sesión:</span>
            <span className="font-medium text-gray-700">{lastSession}</span>
          </div>
          <div>
            <span className="block">Próxima sesión:</span>
            <span className="font-medium text-gray-700">{nextSession}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
