import React from 'react'
// import rain from '../Assets/rain.png'
// import clear from '../Assets/clear.png'
// import cloud from '../Assets/cloud.png'
// import drizzle from '../Assets/drizzle.png'
// import snow from '../Assets/snow.png'

function DailyForcast({ title }) {
    return (
        <div>
            <div className='flex items-center justify-start mt-6'>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />

            <div className='flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>monday</p>
                    <img src={rain} className='w-12 my-1' alt="" />
                    <p className='font-medium'>20°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>monday</p>
                    <img src={rain} className='w-12 my-1' alt="" />
                    <p className='font-medium'>20°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>monday</p>
                    <img src={rain} className='w-12 my-1' alt="" />
                    <p className='font-medium'>20°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>monday</p>
                    <img src={rain} className='w-12 my-1' alt="" />
                    <p className='font-medium'>20°</p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>monday</p>
                    <img src={rain} className='w-12 my-1' alt="" />
                    <p className='font-medium'>20°</p>
                </div>
            </div>


        </div>
    )
}

export default DailyForcast