import React from 'react'
import './Consultant.css'
import { GrGroup } from 'react-icons/gr'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Maincard from '../MainCard/Maincard'
import { HiUserGroup } from 'react-icons/hi'
import { FaWpforms } from 'react-icons/fa'
import { CiMoneyBill, CiMoneyCheck1 } from 'react-icons/ci'
import Table from '../Table/Table'
import { AiOutlineReload } from 'react-icons/ai'
import { HiOutlineArrowSmallDown, HiOutlineArrowUturnRight } from 'react-icons/hi2'
const Consultant = () => {
  return (
    <section className='main'>
    <div className='consultant-main'>
        <div className='consultant-heading'>

<p><GrGroup/></p><p>Consultants</p>
        </div>
  </div>
  <div className='filter-main'>
   <div className="filter-heading">
    <p>Filters</p>
   </div>
   <div className="inputs">
    <div className="first-input">
      <p>Select Range</p>
      <p><MdKeyboardArrowDown/></p>
    </div>
    <div className='input'>
    <input type="checkbox" name='summary' id="" />
    <p>Summary</p>
    </div>
    <div className="input">
      <input type="checkbox" name="branch" id="" />
      <p>Branch Wise</p>
    </div>
   </div>
  </div>
  <div className='mainpage-list'>
  <Maincard name={"Consultant Count"} color={"#FCEDD6"} description={"Today/Period"} count={"90/900"} icon={HiUserGroup}/>
  <Maincard name={"Consultations"} description={"Today/Period"} count={"11/25"} icon={FaWpforms} color={"#E0E6FE"}/>
  <Maincard name={"Labs"} count={"25/560"} description={"Today/Period"} icon={CiMoneyBill} color={"#DDFBE7"}/>
  <Maincard  name={"DietPlans"} description={"Today/Period"} icon={CiMoneyCheck1} count={"25/250"} color={"#E6D7F6"}/>
  </div>
  <div className="table-section">
    <div className="table-heading">
  <p>Consultants</p>
  <div className="table-action">
  <p><HiOutlineArrowUturnRight /></p>
  <p><HiOutlineArrowSmallDown/></p>
  </div>

    </div>
  <Table/>
  </div>
  </section>
  )
}

export default Consultant