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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education