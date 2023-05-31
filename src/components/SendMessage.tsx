import Input from "./Input"

interface Props {
  disabled: boolean
  onSendMessage: (message: string) => void
}

export default function SendMessage({ disabled, onSendMessage }: Props) {
  return (
    <footer className="w-full p-5">
      <div className="m-auto max-w-4xl">
        <Input disabled={disabled} onSend={onSendMessage} />
        
        <div className="text-center text-xs text-gray-300 mt-2 ">
          ChatGPT - 2023
        </div>
      </div>
    </footer>
  )
}