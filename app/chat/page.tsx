import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Video, Phone, MoreVertical, Send, Paperclip, ImageIcon, Smile } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ChatList from "@/components/chat-list"
import ChatMessage from "@/components/chat-message"

export default function ChatPage() {
  return (
    <div className="container px-0 py-0 max-w-md mx-auto h-[calc(100vh-64px)] flex flex-col">
      <div className="flex">
        <div className="w-1/3 border-r h-[calc(100vh-64px)] overflow-y-auto">
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Mensajes</h1>
            <div className="relative mb-4">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Buscar chats" className="pl-8" />
            </div>
            <ChatList />
          </div>
        </div>

        <div className="w-2/3 flex flex-col h-[calc(100vh-64px)]">
          <div className="border-b p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Ana García" />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-medium text-sm">Ana García</h2>
                <p className="text-xs text-gray-500">En línea</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <ChatMessage
              sender="Ana García"
              content="Hola Carlos, ¿podríamos cambiar la hora de la sesión de mañana? Me ha surgido un imprevisto."
              time="10:23"
              isMe={false}
            />

            <ChatMessage
              sender="Tú"
              content="Hola Ana, claro que sí. ¿Qué horario te vendría mejor?"
              time="10:25"
              isMe={true}
            />

            <ChatMessage
              sender="Ana García"
              content="¿Sería posible a las 12:00 en lugar de a las 10:00?"
              time="10:26"
              isMe={false}
            />

            <ChatMessage
              sender="Tú"
              content="Perfecto, tengo ese horario disponible. He actualizado la cita en el calendario."
              time="10:28"
              isMe={true}
            />

            <ChatMessage
              sender="Ana García"
              content="¡Genial! Muchas gracias por la flexibilidad. Por cierto, ¿podrías enviarme la rutina que comentamos para hacer en casa?"
              time="10:30"
              isMe={false}
            />

            <ChatMessage
              sender="Tú"
              content="Claro, te la envío ahora mismo. Es una rutina de 30 minutos que puedes hacer sin equipamiento."
              time="10:32"
              isMe={true}
            />

            <div className="flex justify-center my-4">
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Hoy, 15 de Mayo</span>
            </div>

            <ChatMessage
              sender="Ana García"
              content="¡Buenos días! ¿Cómo estás? Quería comentarte que he estado siguiendo la rutina que me enviaste y me está funcionando muy bien."
              time="09:15"
              isMe={false}
            />
          </div>

          <div className="border-t p-3">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Input placeholder="Escribe un mensaje..." className="flex-1" />
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Smile className="h-4 w-4" />
              </Button>
              <Button size="icon" className="h-8 w-8">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
