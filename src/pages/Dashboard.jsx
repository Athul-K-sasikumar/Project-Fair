import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'
const Dashboard = () => {
  const [username,setUsername]=useState("")

  useEffect(()=>{
  if(sessionStorage.getItem("user")){
   setUsername(JSON.parse(sessionStorage.getItem("user")).username)
  }else{
   setUsername("")
  }
  },[])
  return (
    <>
<Header insideDashboard ={true}/>
<div style={{marginTop:'100px'}} className="container-fluid">
  <div className="row mt-3 ">
    <div className="col-lg-6">
      <h1 style={{fontSize:"35px"}}>Welcome <span style={{fontSize:'45px'}} className='text-danger'>{username}</span>,</h1>
      <View/>
    </div>
    <div className='col-lg-6'>
      <Profile/>
    </div>
  </div>
</div>

    </>
  )
}

export default Dashboard