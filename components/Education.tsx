import React from 'react'

const Education = () => {
    return (
        <div className="pl-24 pr-24">
            <div className='bloque flex-row flex justify-between p-12 pt-10 pb-9'>
                <div className='flex flex-col gap-4'>
                    <span className='medium-title'>University of Antioquia</span>
                    <div className='flex flex-row justify-between'>
                        <span className='letra-oscura text-sm font-medium'>Student</span>
                        <div className='bg-rose-500 pl-1 pr-1 flex items-center'>
                            <span className='text-gray-50 text-sm '>Agu 2017 - Current</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-[600px]'>
                    <span className='medium-title'>Certificate Of Systems Engineering</span>
                    <p className='letra-clara'>
                        I am currently an eighth-semester student pursuing a degree in Systems Engineering at the University of Antioquia, Medellin campus.
                        In addition to my academic pursuits, I actively participated in some university-initiated video game development projects, where
                        I gained valuable experience in video game development and 3D modeling.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education