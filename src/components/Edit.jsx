import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import r1 from '../assets/r1.jpg'

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <>
   <button onClick={handleShow} className='btn '> <i className='fa-solid fa-edit'></i></button>
   <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
           <label>
            <input style={{display:'none'}} type="file" />
            <img height={'100px'} width={'200px'} className='img-fluid' src={r1} alt="" />
           </label>
           <div className='text-warning fw-bolder my-2' >Upload only the following file types(jpeg,jpg,png)</div>
          </div>
          <div className="col-lg-8">
            <div className='mb-2'>
              <input type="text" placeholder='Project Title' className='form-control ' />
            </div>
            <div className='mb-2'>
              <input type="text" placeholder='Languages used in the project' className='form-control ' />
            </div>
            <div className='mb-2'>
              <input type="text" placeholder='Project OverView' className='form-control ' />
            </div>
            <div className='mb-2'>
              <input type="text" placeholder='Project Github Link' className='form-control ' />
            </div>
            <div className='mb-2'>
              <input type="text" placeholder='Project  website link' className='form-control ' />
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Uodate</Button>
        </Modal.Footer>
      </Modal>
      

   </>
  
  )
}

export default Edit