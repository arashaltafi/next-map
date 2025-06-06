import Link from 'next/link'
import React from 'react'

const IranPage = () => {
    return (
        <div className='w-full min-h-screen items-center justify-around flex flex-col px-16 py-8 bg-rose-100'>
            <h1 className='text-7xl text-rose-800 font-bold'>Iran Map, Data</h1>

            <div className='w-full h-full flex flex-col items-center justify-center gap-12'>
                <Link
                    href={'/iran/map'}
                    className='text-2xl px-12 py-6 rounded-xl hover:rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all'
                >
                    Iran Map Sample
                </Link>

                <Link
                    href={'/iran/data'}
                    className='text-2xl px-12 py-6 rounded-xl hover:rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all'
                >
                    Iran Data Sample
                </Link>
            </div>
        </div>
    )
}

export default IranPage