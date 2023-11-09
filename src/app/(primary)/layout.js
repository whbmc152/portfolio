import Navbar from "../components/navbar"

export default function HomeLayout({ children }) {
    return (
      <div className="flex min-h-full h-full min-w-full w-full flex-col">
        <Navbar/>
        <main className="min-h-full h-full min-w-full w-full">
            {children}
        </main>
      </div>
    )
  }
  