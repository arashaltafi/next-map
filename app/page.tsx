import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full min-h-screen items-center justify-around flex flex-col px-16 py-8 bg-rose-100'>
      <h1 className='text-7xl text-rose-800 font-bold'>Map Sample</h1>

      <div className='w-full h-full flex flex-col items-center justify-center gap-12'>
        <Link
          href={'/neshan'}
          className='text-xl px-10 py-4 rounded-xl hover:rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all'
        >
          Neshan Sample
        </Link>

        <Link
          href={'/leaflet'}
          className='text-xl px-10 py-4 rounded-xl hover:rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all'
        >
          Leaflet Sample
        </Link>

        <Link
          href={'/map'}
          className='text-xl px-10 py-4 rounded-xl hover:rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all'
        >
          Map Sample
        </Link>

        <Link
          href={'/iran'}
          className='text-xl px-10 py-4 rounded-xl hover:rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white transition-all'
        >
          Iran Map, Data
        </Link>
      </div>
    </div>
  )
}

export default HomePage