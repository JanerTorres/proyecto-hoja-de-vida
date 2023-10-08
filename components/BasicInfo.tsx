import React from 'react'

interface BasicInfoProps{
    item: string,
    detail: string,
    color: string
}

const BasicInfo = ({item,detail, color}:BasicInfoProps) => {
  return (
    <div className='flex justify-between'>
        <span className='letra-oscura text-sm font-medium'>{item}:</span>
        <span className={color + " text-sm font-medium"}>{detail}</span>
    </div>
  )
}

export default BasicInfo