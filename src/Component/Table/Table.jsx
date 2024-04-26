import React from 'react'
import './Table.css'
import { data } from '../../Data/data'
const Table = () => {
  return (
    <div className='table-main'>
<table>
  <tr>
    <th>NAME</th>
    <th>PATIENT COUNT</th>
    <th>LABS</th>
    <th>DIET PLANS</th>
  </tr>
  {data.map((data,index)=>(
  <tr key={index}>
    <td>{data.name}</td>
    <td>{data.patient_count}</td>
    <td>{data.labs}</td>
    <td>{data.diet_plans}</td>
  </tr>
    )
  )}
</table>
    </div>
  )
}

export default Table