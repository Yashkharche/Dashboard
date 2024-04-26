import React from 'react'
import './sidecard.css'
const SideCards = ({icon:Icon,name,status}) => {
  return (
    <div className={` ${status?"active":"sidecard-main" }`}>
    <p><Icon/></p>
    <p>{name}</p>
    </div>
  )
}

export default SideCards