import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function SearchInput({ setCity, units, setUnits }) {

    const [query, setQuery] = useState("")

    const handleButton = () => {
        if (query !== '')
            setCity({ q: query })
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setCity({
                    lat,
                    lon,
                });
            });
        }
    }

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit)
            setUnits(selectedUnit);
    }

    return (
        <div className='ms-10 flex  flex-row justify-center my-3'>
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    type="text"
                    placeholder='search for city...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
                />
                <UilSearch
                    size={30}
                    className='text-white cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleButton}
                />
                <UilLocationPoint
                    size={30}
                    className='text-white cursor-pointer transition ease-out hover:scale-125'
                    onClick={handleLocationClick}
                />
            </div>

            <div className='flex flex-row w-1/2 items-center justify-center'>
                <button
                    name='metric'
                    className='text-xl text-white font-light transition ease-out hover:scale-125'
                    onClick={handleUnitChange}>
                    °C
                </button>
                <p className='text-xl text-white mx-1.5'>|</p>
                <button
                    name='imperial'
                    className='text-xl text-white font-light transition ease-out hover:scale-125'
                    onClick={handleUnitChange}>
                    °F
                </button>
            </div>
        </div>
    )
}

export default SearchInput