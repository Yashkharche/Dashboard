import React from 'react'
import './maincard.css'
import { IoCloudyNight } from 'react-icons/io5'
const Maincard = ({name,icon:Icon,count,description,color}) => {
  return (
    <div className='maincard-main' style={{borderLeft:`4px solid ${color}`}}>
        <div className='card-left'>
          <p id='card-name'>{name}</p>
            <p id='card-count'>{count}</p>
            <p id='card-description'>{description}</p>
        </div>
        <div className='card-right'>
            <p style={{backgroundColor:`${color}`}}><Icon/></p>
        </div>
    </div>
  )
}

export default Maincard