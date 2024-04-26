import React from 'react'
import './Sidebar.css'
import SideCards from '../Sidecard/SideCards'
import { RxAvatar } from 'react-icons/rx'
import { GoDatabase } from 'react-icons/go'
import { CiBeaker1, CiMoneyBill, CiShop } from 'react-icons/ci'
import { MdAppRegistration } from 'react-icons/md'
import { FaWpforms } from 'react-icons/fa'
import { BsEyedropper } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='sidebar-main'>
        <p>Dashboards</p>
        <div className='sidebar-list1'>
        <SideCards icon={RxAvatar} name={"Patients"}/>
        <SideCards icon={GoDatabase} name={"HR"}  status={"true"}/>
        <SideCards icon={CiBeaker1} name={"Labs"}/>
        <SideCards icon={CiShop} name={"Pharma"}/>

        </div>
        <p>Processes</p>

<div className='sidebar-list1'>
        <SideCards icon={MdAppRegistration} name={"Registration"}/>
        <SideCards icon={FaWpforms} name={"Consultation"}/>
        <SideCards icon={BsEyedropper} name={"Tests & Reports"}/>
        <SideCards icon={CiMoneyBill} name={"Billing"}/>

        </div>
    </div>
  )
}

export default Sidebar