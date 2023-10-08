import React from 'react'

interface SlideBarProps{
    nivel: number
    item: string
}

const SlideBar = ({item, nivel}:SlideBarProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between'>
                <span className='letra-peque'>{item}</span>
                <span className='letra-peque'>{nivel}%</span>
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-md">
                <div
                    className="h-full bg-rose-500 rounded-md"
                    style={{ width: `${nivel}%` }}>
                </div>
            </div>

        </div>
    )
}

export default SlideBar