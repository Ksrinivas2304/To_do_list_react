import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'




const TodoItems = () => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div>
        <img src={tick} alt="" />
        <p>Learn Coding </p>
      </div>
    </div>
  )
}

export default TodoItems