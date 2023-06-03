import { Chat } from '@/types/Chat'
import ChatPlaceholder from './ChatPlaceholder'
import ChatMessages from './ChatMessages'
import LoadingMessage from './LoadingMessage'

interface Props {
  chat: Chat | undefined
  loading: boolean
}

export default function ChatArea({ chat, loading }: Props) {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat &&
        chat.messages.map(message => (
          <ChatMessages key={message.id} message={message} />
        ))}
        {loading && <LoadingMessage />}
    </section>
  )
}
