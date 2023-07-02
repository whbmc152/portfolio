import Image from 'next/image'

import Navbar from './components/navbar'
import Greeting from './components/greeting'

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Navbar path={'/'}/>
      <Greeting/>
    </main>
  )
}
