import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-background text-text shadow-md shadow-gray-300 p-4'>
      <Link href="/" className='flex flex-col bg-primary rounded-lg bg-gradient-to-r from-black to-primary bg-clip-text text-transparent'><span className='text-4xl font-bold'>Locker</span><span className='text-base text-black'>Reservation</span></Link>
      <div className='size-14 rounded-full bg-primary'/>
    </header>
  )
}
