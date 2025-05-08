import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ChatList() {
  const chats = [
    {
      id: 1,
      name: "Ana García",
      lastMessage: "¿Podríamos cambiar la hora de mañana?",
      time: "10:23",
      unread: true,
      online: true,
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      lastMessage: "Gracias por la rutina nueva",
      time: "Ayer",
      unread: false,
      online: false,
    },
    {
      id: 3,
      name: "Laura Méndez",
      lastMessage: "Te envié los resultados",
      time: "Ayer",
      unread: false,
      online: true,
    },
    {
      id: 4,
      name: "Miguel Sánchez",
      lastMessage: "¿Cuándo es nuestra próxima sesión?",
      time: "Lun",
      unread: false,
      online: false,
    },
    {
      id: 5,
      name: "Elena Martín",
      lastMessage: "Me duele un poco la rodilla después del último entrenamiento",
      time: "Dom",
      unread: false,
      online: false,
    },
  ]

  return (
    <div className="space-y-1">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
            chat.id === 1 ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
        >
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${chat.name.charAt(0)}`} alt={chat.name} />
              <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {chat.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <p className={`font-medium text-sm ${chat.unread ? "text-black" : "text-gray-700"}`}>{chat.name}</p>
              <p className="text-xs text-gray-500">{chat.time}</p>
            </div>
            <p className={`text-xs truncate ${chat.unread ? "font-medium text-black" : "text-gray-500"}`}>
              {chat.lastMessage}
            </p>
          </div>
          {chat.unread && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
        </div>
      ))}
    </div>
  )
}
