import Avatar from '../components/avatar'
import Greeting from '../components/greeting'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-full h-full min-w-full w-full flex-col">
      <Greeting/>
      <Avatar/>
    </main>
  )
}
