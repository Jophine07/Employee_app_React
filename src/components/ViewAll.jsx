import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
  const[data,changeData]=useState(
    [
      {"id":1,"Name":"Ram","Address":"Kodakara"},
      {"id":2,"Name":"Sam","Address":"Chalakudy"},
      {"id":3,"Name":"Rami","Address":"Thrissur"},
      {"id":4,"Name":"Ramani","Address":"Angmamly"},
    ]
  )
  return (
    <div>
      <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Employe ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
      return  <tr>
      <th scope="row">{value.id}</th>
      <td>{value.Name}</td>
      <td>{value.Address}</td>
    </tr>
    }
   )

   }
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll