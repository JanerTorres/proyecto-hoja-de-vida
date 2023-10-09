import React from 'react'

interface SkillProps{
    icon: string,
    title: string,
    info: string
}

const Skill = ({icon, title, info}:SkillProps) => {
  return (
    <div className='flex flex-col bloque w-96 p-10 items-center gap-6 rounded-mds'>
        <img hidden={!(icon==='code')} className='w-20' src="/images/code_icon.png" alt="" />
        <img hidden={!(icon==='design')} className='w-20' src="/images/design.png" alt="" />
        <img hidden={!(icon==='paint')} className='w-20' src="/images/paint.png" alt="" />
        <img hidden={!(icon==='bd')} className='w-20' src="/images/bd.png" alt="" />
        <img hidden={!(icon==='game')} className='w-20' src="/images/game.png" alt="" />
        <img hidden={!(icon==='supp')} className='w-20' src="/images/supp.png" alt="" />

        <div className='flex flex-col items-center gap-2'>
            <span className='text-lg font-medium letra-oscura'>{title}</span>
            <span className='letra-clara'>{info}</span>
        </div>
    </div>
  )
}

export default Skill