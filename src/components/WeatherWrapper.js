import React from 'react'
import { WeatherCity } from './WeatherCity'
import { WeatherTemperature } from './WeatherTemperature'
import { WeatherDetails } from './WeatherDetails'
import { TemperatureLogo } from './TemperatureLogo'
import { FeelsLike } from './FeelsLike'
import { Humidity } from './Humidity'

export const WeatherWrapper = () => {
  return (
    <div className='WeatherWrapper'>
        <WeatherCity/>
        <WeatherTemperature/>
        <WeatherDetails/>
        <TemperatureLogo/>
        <FeelsLike/>
        <Humidity/>
    </div>
  )
}
