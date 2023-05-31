import { Messages } from '@/types/Messages'
import IconUser from './icons/IconUser'
import IconRobot from './icons/IconRobot'

interface Props {
  message: Messages
}

export default function ChatMessages({ message }: Props) {
  return (
    <div className={`py-5 ${message.author === 'ia' && 'bg-gray-600/50'}`}>
      <div className="max-w-4xl m-auto flex">

        <div
          className={`w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded 
          ${message.author === 'ia' ? 'bg-emerald-500' : 'bg-blue-500'}`}
        >
          {message.author === 'me' && <IconUser width={24} height={24} />}
          {message.author === 'ia' && <IconRobot width={24} height={24} />}
        </div>

        <div className='flex-1 text-base whitespace-pre-wrap'>
          {message.body}
        </div>
      </div>
    </div>
  )
}
