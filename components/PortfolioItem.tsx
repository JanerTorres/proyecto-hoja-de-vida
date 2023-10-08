import React from 'react'
import ButtonModal from './ButtonModal'

const PortfolioItem = () => {
  return (
    <div className='w-80 bloque'>
        <img className='w-full' src="/images/portfolio-img.png" alt="Portfolio 1" />
        <div className='flex flex-col p-5 gap-2 items-start'>
            <span className='medium-title'>How To Make Web Templates</span>
            <p className='letra-clara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </p>
            <ButtonModal></ButtonModal>
        </div>
    </div>
  )
}

export default PortfolioItem