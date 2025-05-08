import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ChatMessageProps {
  sender: string
  content: string
  time: string
  isMe: boolean
}

export default function ChatMessage({ sender, content, time, isMe }: ChatMessageProps) {
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div className={`flex gap-2 max-w-[80%] ${isMe ? "flex-row-reverse" : ""}`}>
        {!isMe && (
          <Avatar className="h-8 w-8">
            <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${sender.charAt(0)}`} alt={sender} />
            <AvatarFallback>{sender.charAt(0)}</AvatarFallback>
          </Avatar>
        )}
        <div>
          <div
            className={`p-3 rounded-lg ${
              isMe ? "bg-emerald-500 text-white rounded-tr-none" : "bg-gray-100 text-gray-800 rounded-tl-none"
            }`}
          >
            <p className="text-sm">{content}</p>
          </div>
          <p className={`text-xs text-gray-500 mt-1 ${isMe ? "text-right" : ""}`}>{time}</p>
        </div>
      </div>
    </div>
  )
}
