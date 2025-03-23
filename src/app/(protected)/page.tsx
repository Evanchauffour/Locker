"use client"
import Buttons from '@/components/Button'
import React from 'react'

export default function Page() {
  const numRows = 4
  const numCols = 4

  const totalLockers = numRows * numCols

  const lockers = Array.from({ length: totalLockers }, (_, index) => ({
    id: index + 1,
    name: `Locker ${index + 1}`,
    status: index % 5 === 0 ? 'unavailable' : 'available',
  }))

  return (
    <div className='relative h-full w-full rounded-lg mx-auto flex flex-col gap-8 p-2'>
      <div className='overflow-auto flex-1'>
        <div
          className='grid gap-6 h-full w-full px-1 py-2'
          style={{
            gridTemplateColumns: `repeat(${numCols}, 1fr)`,
            gridTemplateRows: `repeat(${numRows}, 1fr)`,
          }}
        >
          {lockers.map((locker) => (
            <div key={locker.id} className='flex flex-col justify-between bg-background shadow-md shadow-slate-500 rounded-lg p-2 hover:-translate-y-1 transition-all duration-300 min-w-[200px] min-h-[200px]'>
              <div className='flex items-center justify-between'>
                <p className='text-sm text-black'>{locker.name}</p>
                <div
                  className={`size-2 rounded-full animate-pulse ${
                    locker.status === 'available' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
              </div>
              <Buttons label='Réserver' className='w-full' disabled={locker.status === 'unavailable'} isDark/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
