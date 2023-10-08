import React from 'react'

interface SectionInfoProps{
    title: string,
    info: string
}

const SectionInfo = ({title, info}:SectionInfoProps) => {
    return (
        <div className="flex flex-col items-center w-full gap-6 pt-11 pb-11">
            <span className="letra-oscura font-bold text-3xl">{title}</span>
            <p className="letra-clara  w-[560px] text-center">{info}</p>
        </div>
    )
}

export default SectionInfo