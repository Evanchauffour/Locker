import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between rounded-xl bg-background text-text shadow-md shadow-gray-300'>
      <div className='flex items-center gap-16'>
        <Link href="/" className='flex flex-col bg-primary p-4 rounded-lg bg-gradient-to-r from-black to-primary bg-clip-text text-transparent'><span className='text-4xl font-bold'>Locker</span><span className='text-base'>Reservation</span></Link>
        <nav>
          <ul className='flex gap-4 items-center text-base'>
            <li><Link href="/my-locker">Mes casiers</Link></li>
            <li><Link href="/administration">Administration</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
