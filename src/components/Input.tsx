import { KeyboardEvent, useEffect, useRef, useState } from 'react'
import IconSend from './icons/IconSend'

interface Props {
  disabled: boolean
  onSend: (message: string) => void
}

export default function Input({ disabled, onSend }: Props) {
  const [text, setText] = useState('')
  const textEl = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textEl.current) {
      textEl.current.style.height = '0px'
      let scrollHeight = textEl.current.scrollHeight
      textEl.current.style.height = scrollHeight + 'px'
    }
  }, [text, textEl])

  const handleTextKeyUP = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code.toLocaleLowerCase() === 'enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    } 
  }

  const handleSendMessage = () => {
    if (!disabled && text.trim() !== '') {
      onSend(text)
      setText('')
    }
  }

  return (
    <div
      className={`flex w-full border border-gray-800/50 bg-gpt-lightgray p-4 rounded-md
      ${disabled && 'opacity-50'} items-center `}
    >
      <textarea
        ref={textEl}
        className="flex-1 border-0 bg-transparent resize-none outline-none h-6 max-h-48 overflow-auto"
        placeholder="Digite uma mensagem"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyUp={handleTextKeyUP}
        disabled={disabled}
      ></textarea>

      <div onClick={handleSendMessage} className={`self-end p-2 cursor-pointer rounded
        ${text.length ? 'opacity-100 bg-emerald-500' : 'opacity-20'}`}>
        <IconSend width={20} height={20} />
      </div>
    </div>
  )
}
