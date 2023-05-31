import { Chat } from "@/types/Chat"
import ChatPlaceholder from "./ChatPlaceholder";
import ChatMessages from "./ChatMessages";

interface Props {
  chat: Chat | undefined;
}


export default function ChatArea({ chat }: Props) {
  return (
    <section className="flex-auto h-0 overflow-y-scroll">
      {!chat && <ChatPlaceholder />}
      {chat && chat.messages.map(message => (
        <ChatMessages key={message.id} message={message} />
      ))}
    </section>
  )
}