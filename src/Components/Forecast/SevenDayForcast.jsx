import React from 'react'
import WeatherCard from '../WeatherCard'

export default function SevenDayForcast() {
  return (
    <div className='d-flex' >
      <WeatherCard/>
      <div className='bg-secondary container mx-2 p-3'>
      7 Days forcast.
      </div>
    </div>
  )
}
