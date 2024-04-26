import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown, MdNotificationsNone } from 'react-icons/md';
import './Header.css';
import { BiArrowToBottom } from 'react-icons/bi';
const Header = () => {
  return (
    <div className='header-main'>
        <div className='header-icon'></div>
        <div className='header-middle'>
            <div className='header-dropdown'>
                <p>Patients</p>
                <p><MdKeyboardArrowDown /></p>
            </div>
                <input type="text" placeholder='Search' />
                <p><CiSearch/></p>
                <button>+ Add New</button>
        </div>
        <div className='header-last'>
        <p><MdNotificationsNone/></p>        
        <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" />
        </div>
    </div>
  )
}

export default Header