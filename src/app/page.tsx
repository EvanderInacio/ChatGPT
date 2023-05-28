import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex h-screen bg-gpt-gray'>
      <Sidebar>
        sidebar
      </Sidebar>

      <section className='flex flex-col w-full'>
        ...
      </section>
    </main>
  )
}
