import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import rain_icon from '../Assets/rain.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import snow_icon from '../Assets/snow.png'

function Details({ weather: { details, icon, temp, feels_like, temp_min, temp_max, humidity, sunrise, sunset, speed } }) {

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": cloud_icon,
        "04n": cloud_icon,
        "09d": drizzle_icon,
        "09n": drizzle_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }

    const weather_icon = allIcons[icon]
    const temprature = Math.floor(temp)

    return (
        <div>
            <div className='flex text-white items-center justify-center my-3'>
                <img src={weather_icon} alt="" className='w-13' />
            </div>

            <div className='ms-10 flex flex-row items-center justify-between text-white '>
                <p className='text-4xl'> {temprature}°</p>

                <div className=' flex items-center justify-center text-xl'>
                    <p>{details}</p>
                </div>

                <div className=' flex flex-col space-y-2'>
                    <div className='flex font-light items-center justify-center text-sm'>
                        <UilTemperature size={20} className='mr-1' />
                        Real fell:
                        <span className='font-medium ml-1' />{`${feels_like.toFixed()}`}<span />
                    </div>

                    <div className='flex font-light items-center justify-center text-sm'>
                        <UilTear size={20} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1' />{`${humidity.toFixed()}`}<span />
                    </div>

                    <div className='flex font-light items-center justify-center text-sm'>
                        <UilWind size={20} className='mr-1' />
                        wind :
                        <span className='font-medium ml-1' />{`${speed.toFixed()} km/h`}<span />
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
                <UilSun />
                <p className='font-light'>Rise:
                    <span className='font-medium ml-1'>06:45 AM</span>
                </p>
                <p className='font-light'>|</p>

                <UilSunset />
                <p className='font-light'>Set:
                    <span className='font-medium ml-1'>07:45 PM</span>
                </p>
                <p className='font-light'>|</p>

                <UilSun />
                <p className='font-light'>High:
                    <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
                </p>
                <p className='font-light'>|</p>

                <UilSun />
                <p className='font-light'>Low:
                    <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
                </p>
            </div>

        </div>
    )
}

export default Details