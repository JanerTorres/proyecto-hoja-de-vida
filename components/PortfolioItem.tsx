import React from 'react'
import ButtonModal from './ButtonModal'
import { IoLogoGameControllerA } from 'react-icons/io';
import { BsCodeSquare } from 'react-icons/bs';
import { PiGameControllerLight } from 'react-icons/pi';



interface PortfolioItemProps {
  icon: string,
  title: string,
  date: string,
  description: string
}


const PortfolioItem = ({ icon, title, date, description }: PortfolioItemProps) => {
  return (
    <div className='w-80 bloque flex flex-col items-center pl-2 pr-2'>
      <BsCodeSquare hidden={!(icon === 'web')} className='h-32 w-32 sec-color pt-10'></BsCodeSquare>
      <IoLogoGameControllerA hidden={!(icon === 'gamea')} className='h-32 w-32 sec-color pt-10'></IoLogoGameControllerA>
      <PiGameControllerLight hidden={!(icon === 'gameb')} className='h-32 w-32 sec-color pt-10'></PiGameControllerLight>
      <div className='flex flex-col p-5 justify-between items-start h-full'>
        <div className='flex flex-col gap-3'>
          <span className='medium-title'>{title}</span>
          <span className='font-medium letra-oscura text-sm'>{date}</span>
          <p className='letra-clara'>{description}</p>
        </div>
        <ButtonModal title={title} choose={icon}></ButtonModal>
      </div>
    </div>
  )
}

export default PortfolioItem