import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Link } from '@nextui-org/link'
import { Head } from './head'
import dayjs from 'dayjs'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(dayjs().format('YYYY'))
  }, [])

  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://twitter.com/0xpokotaro"
          title="X - 0xpokotaro"
        >
          <span className="text-default-600">&copy;</span>
          <p className="text-primary">{year} 0xpokotaro</p>
        </Link>
      </footer>
    </div>
  )
}
