import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import pk from '../assets/p1.jpg'
import ProjectCard from '../components/ProjectCard'
import Card from 'react-bootstrap/Card';
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import { homeProjectsApi } from '../services/allAPI.JS';

const Home = () => {
  const [allHomeProjects,setAllHomeProjects]=useState([])

const navigate= useNavigate()

useEffect(()=>{
  getAllHomeProjects()
},[])

const getAllHomeProjects = async ()=>{
  try {
    const result = await homeProjectsApi()
    if(result.status==200){
      console.log(result.data);
      
      setAllHomeProjects(result.data)
    }
  } catch (err) {
    console.log(err);
    
  }
}

const handleProjects =()=>{
  if(sessionStorage.getItem("token")){
 navigate('/projects')
  }else{
  alert("please login to get full access")
  }
}

  return (
    <>
    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
 <div className="container">
  <div className="row align-items-center">
    <div className="col-lg-6">
    <h1 style={{fontSize:'70px'}}> <i className='fa-brands fa-docker me-1'></i>Project Fair</h1>
    <p style={{}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt iure placeat similique labore mollitia cupiditate ipsam ea accusamus repellendus consectetur dolores nobis laboriosam officia, inventore voluptate assumenda non eius.</p>
    {sessionStorage.getItem("token")
    ?
    <Link to={'/dashboard'} className='btn btn-success'>Manage your projects</Link>
    :
      <Link to={'/login'} className='btn btn-warning'>Start to explore</Link>
    }
    </div>
    <div className="col-lg-6">
<img className='img-fluid ms-3' src={pk} alt="" />
    </div>

  </div>
 </div>
    </div>
    <div className="my-5 text-center">
      <h1 className='mb-5 '>Explore our Projects</h1>
      <marquee>
  <div className='d-flex'>
    {
      allHomeProjects?.length > 0 && 
      allHomeProjects?.map(project=>{
        return (
          <div key={project?._id} className='me-5'>
            <ProjectCard displayData={project} />
          </div>
        );
      })
    }
  </div>
</marquee>

      <button onClick={handleProjects} className='btn btn-link mt-5 text-dark'>Click Here To View More Projects...</button>
    </div>
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>Our Testimonials</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
      <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} src={p4} alt="" />
          <span>Manu</span></Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center align-items-center">
            <i className='fa-solid fa-star text-success'></i>
            <i className='fa-solid fa-star text-success'></i>
            <i className='fa-solid fa-star text-success'></i>
            <i className='fa-solid fa-star text-success'></i>
            <i className='fa-solid fa-star text-success'></i>
            </div>
            <p style={{textAlign:'justify',paddingTop:'7px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quae eum, error soluta sit tempore quas optio .</p>
       
        </Card.Text>
     
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} src={p2} alt="" />
        <span>Raju</span></Card.Title>
      <Card.Text>
        <div className="d-flex justify-content-center align-items-center">
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          </div>
          <p style={{textAlign:'justify',paddingTop:'7px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quae eum, error soluta sit tempore quas optio .</p>
     
      </Card.Text>
   
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} src={p3} alt="" />
       <span>Max</span></Card.Title>
      <Card.Text>
        <div className="d-flex justify-content-center align-items-center">
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          <i className='fa-solid fa-star text-success'></i>
          </div>
          <p style={{textAlign:'justify',paddingTop:'7px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quae eum, error soluta sit tempore quas optio .</p>
     
      </Card.Text>
   
    </Card.Body>
  </Card>
      </div>
    </div>

    </>
  )
}

export default Home