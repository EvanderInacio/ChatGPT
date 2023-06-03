'use client'

import ChatArea from '@/components/ChatArea'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SendMessage from '@/components/SendMessage'
import { Chat } from '@/types/Chat'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [chatList, setChatList] = useState<Chat[]>([])
  const [chatActiveId, setChatActiveId] = useState<string>('')
  const [chatActive, setChatActive] = useState<Chat>()
  const [AILoading, setAILoading] = useState(false)
  const [theme, setTheme] = useState(true)

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  const closeSidebar = () => {
    setOpenSidebar(false)
  }

  const activeTheme = () => {
    setTheme(!theme)
  }

  const handleClear = () => {
    if(AILoading) {
      return
    }

    setChatActiveId('')
    setChatList([])
  }

  const handleNewChat = () => {
    if(AILoading) {
      return
    }

    setChatActiveId('')
    closeSidebar()
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId) {
      // Creating new chat 
      let newChatId = uuidv4()
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          { id: uuidv4(), author: 'me', body: message }
        ]
      }, ...chatList])

      setChatActiveId(newChatId)
    } else {
      // Updating existing chat
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId)
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me', 
        body: message
      })

      setChatList(chatListClone)
    }

    setAILoading(true)
  }

  return (
    <main className={`flex h-screen ${theme ? 'bg-gpt-gray' : 'bg-gpt-dark'}`}>
      <Sidebar
        theme={activeTheme}
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

        <ChatArea chat={chatActive} loading={AILoading} />

        <SendMessage disabled={AILoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  )
}
