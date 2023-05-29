'use client'

import Sidebar from '@/components/Sidebar'
import IconMenu from '@/components/icons/IconMenu'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [openSidebar, setOpenSidebar] = useState(false)

  const closeSidebar = () => {
    setOpenSidebar(false)
  }

  const handleClear = () => {

  }

  const handleNewChat = () => {

  }

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

      <section className='flex flex-col w-full items-center'>
        <button onClick={() => setOpenSidebar(true)}> 
          <IconMenu width={24} height={24} /> 
        </button>
      </section>
    </main>
  )
}
