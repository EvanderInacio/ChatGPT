'use client'

import ChatArea from '@/components/ChatArea'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SendMessage from '@/components/SendMessage'
import { Chat } from '@/types/Chat'
import { useState } from 'react'

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123',
    title: 'Message Teste',
    messages: [
      {id: '99', author: 'me', body: 'Olá, tudo bem?'},
      {id: '5', author: 'ia', body: 'Sim, tudo.'}
    ]
  })
  const [AILoading, setAILoading] = useState(false)

  const closeSidebar = () => {
    setOpenSidebar(false)
  }

  const handleClear = () => {

  }

  const handleNewChat = () => {

  }

  const handleSendMessage = () => {}

  return (
    <main className='flex h-screen bg-gpt-gray'>
      <Sidebar
        open={openSidebar}
        onClose={closeSidebar}
        onClear={handleClear}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>

      <section className='flex flex-col w-full'>
        <Header 
          title={`Bla Bla`}
          newChatClick={handleNewChat}
          openSidebarClick={() => setOpenSidebar(true)}
        />

        <ChatArea chat={chatActive}/>

        <SendMessage disabled={AILoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  )
}
