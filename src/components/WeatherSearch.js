import React from 'react'

export const WeatherSearch = () => {
  return (
    <div>
      <form className='WeatherForm'>
          <input type="text"className='Weather-input' placeholder='What is your city ?' />
          <button type='submit' className='weather-btn'>Search</button>
      </form>
    </div>
  )
}
