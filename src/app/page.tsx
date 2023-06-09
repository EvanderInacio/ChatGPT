'use client'

import ChatArea from '@/components/ChatArea'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SendMessage from '@/components/SendMessage'
import { Chat } from '@/types/Chat'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SidebarChat from '@/components/SidebarChat'
import { openai } from '@/api/openai'

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

  useEffect(() => {
    if (AILoading) {
      getResponseIA()
    }
  }, [AILoading])

  const getResponseIA = async () => {
    setTimeout(() => {
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId)

      if (chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ia',
          body: 'ChatGPT é incapaz de responder essa mensagem! :('
        })

        // const translated = openai.translateMessage(
        //     chatListClone[chatIndex].messages
        //   )
        //   const response = await openai.generate(translated)
      }

      setChatList(chatListClone)
      setAILoading(false)
    }, 3000)
  }

  const closeSidebar = () => {
    setOpenSidebar(false)
  }

  const activeTheme = () => {
    setTheme(!theme)
  }

  const handleClear = () => {
    if (AILoading) {
      return
    }

    setChatActiveId('')
    setChatList([])
  }

  const handleNewChat = () => {
    if (AILoading) {
      return
    }

    setChatActiveId('')
    closeSidebar()
  }

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      // Creating new chat
      let newChatId = uuidv4()
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuidv4(), author: 'me', body: message }]
        },
        ...chatList
      ])

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

  const handleSelectChat = (id: string) => {
    if (AILoading) {
      return
    }

    let item = chatList.find(item => item.id === id)
    if (item) {
      setChatActiveId(item.id)
    }

    closeSidebar()
  }

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList]
    let chatIndex = chatListClone.findIndex(item => item.id === id)
    chatListClone.splice(chatIndex, 1)
    setChatList(chatListClone)
    setChatActiveId('')
  }

  const handleEditChat = (id: string, newTitle: string) => {
    if (newTitle) {
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(item => item.id === id)
      chatListClone[chatIndex].title = newTitle
      setChatList(chatListClone)
    }
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
        {chatList.map(list => (
          <SidebarChat
            key={list.id}
            chatList={list}
            active={list.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
          />
        ))}
      </Sidebar>

      <section className="flex flex-col w-full">
        <Header
          title={chatActive ? chatActive.title : 'Nova conversa'}
          newChatClick={handleNewChat}
          openSidebarClick={() => setOpenSidebar(true)}
        />

        <ChatArea chat={chatActive} loading={AILoading} />

        <SendMessage disabled={AILoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  )
}
