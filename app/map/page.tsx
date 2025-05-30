"use client"

import React from 'react'
import World from "@react-map/world";
import Iran from "@react-map/iran";

const MapPage = () => {
    return (
        <div className='w-full min-h-screen items-center justify-around flex flex-col px-16 py-8 bg-rose-100 overflow-x-hidden'>
            <h1 className='text-7xl text-rose-800 font-bold'>Map Sample</h1>

            <World onSelect={(state: string | null, selectedStates?: string[]) => alert(state)} size={800} hoverColor="orange" type='select-single' />

            <Iran onSelect={(state: string | null, selectedStates?: string[]) => alert(state)} size={800} hoverColor="orange" type='select-single' />
        </div>
    )
}

export default MapPage