import React from 'react'

function SampleCities({ setCity }) {

    const cities = [
        {
            id: 1,
            title: "Washington"
        },
        {
            id: 2,
            title: "Moscow"
        },
        {
            id: 3,
            title: "Addis Ababa"
        },
        {
            id: 4,
            title: "Jerusalem"
        },
        {
            id: 5,
            title: "Canada"
        }
    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button
                    key={city.id}
                    className='text-white text-lg font-medium'
                    onClick={() => setCity({ q: city.title })}
                >{city.title}</button>
            ))}
        </div>
    )
}

export default SampleCities