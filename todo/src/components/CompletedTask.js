import React from 'react'

export default function CompletedTask(props) {
  return (
        <div className='border rounder p-3 '>
            <div className="ml-5 h-100">{props.task}</div> 
        </div>
  )
}
