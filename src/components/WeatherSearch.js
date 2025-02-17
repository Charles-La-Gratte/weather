import React from 'react'

export const WeatherSearch = () => {
  return (
    <div>
      <form className='WeatherForm'>
          <input type="text"className='Weather-input' placeholder='What is your city ?' />
          {/*<button type='submit' className='todo-btn'>Add Task</button>*/}
      </form>
    </div>
  )
}
