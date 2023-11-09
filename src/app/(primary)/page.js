import Avatar from '../components/avatar'
import Greeting from '../components/greeting'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-full min-w-full w-full flex-col">
      <Navbar path='/'/>
      <Greeting/>
      <Avatar/>
    </main>
  )
}
