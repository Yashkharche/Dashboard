import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Consultant from '../Consultant'
import './main.css'
import Table from '../Table'
const Main = () => {
  return (
    <div className='main-main'>
        <Sidebar/>
        <Consultant/>
        
    </div>
  )
}

export default Main