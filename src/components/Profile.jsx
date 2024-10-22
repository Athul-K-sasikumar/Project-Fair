import React,{useState} from 'react'
import { Collapse } from 'react-bootstrap'
import re from '../assets/re.jfif'


const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
  
  <div className="d-flex justify-content-evenly ">
    <h3 className='text-warning'>Profile</h3>
    <button onClick={()=> setOpen(!open)} className='btn text-warning fw-bolder'><i className='fa-solid fa-chevron-down'></i></button>
  </div>
  <Collapse in={open}>
        <div className='row align-items-center justify-content-center shadow rounded p-2 ' id='example-collapse-text'>
         <label className='text-center mb-2'>
          <input style={{display:'none'}} type="file" />
          <img width={'200px'} height={'200px'} className='rounded-circle' src={re} alt="" />
         </label>
         <div className='mb-2'>
          <input placeholder='Linkidin url' type="text" className='form-control' />
         </div>
         <div className='mb-2'>
          <input placeholder='Github url' type="text" className='form-control' />
         </div>
         <div className='d-grid'>
          <button className='btn btn-warning'>Update Profile</button>
         </div>
        </div>
      </Collapse>
  </>
  )
}

export default Profile