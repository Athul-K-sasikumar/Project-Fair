import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SERVERURL from '../services/serverUrl';


const ProjectCard = ({displayData}) => {

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (



    <>
     <Card  onClick={handleShow} className='shadow btn'>
      <Card.Img height={'190px'} width={'190px'} variant="top" src={`${SERVERURL}/uploads/${displayData?.projectImg}`} />
      <Card.Body>
        <Card.Title>{displayData.title}</Card.Title>
      </Card.Body>
    </Card>

   

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src={`${SERVERURL}/uploads/${displayData?.projectImg}`} alt="not found" />
            </div>
            <div className="col-lg-6">
              <h3>{displayData?.title}</h3>
              <h6><span className='fw-bolder'>Languages used: </span> <span className='text-danger'>{displayData.languages}</span></h6>
              <p style={{textAlign:'justify'}}> {displayData.overview} </p>
            </div>
          </div>
          <div className='float-start mt-4'>
            <a className='btn btn-secondary' href={displayData?.github} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a className='btn btn-secondary ms-2' href={displayData.website} target='_blank'><i className='fa-solid fa-link'> </i>  </a>
          </div>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default ProjectCard