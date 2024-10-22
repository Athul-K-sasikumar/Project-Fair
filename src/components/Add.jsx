import React,{useEffect, useState} from 'react'
import { Modal,Button } from 'react-bootstrap' 
import r1 from '../assets/r1.jpg'
import { addProjectApi } from '../services/allAPI.JS'

const Add = () => {
  const [imageFileStatus,setImageFileStatus]=useState(false)
  const [preview,setPreview]=useState(r1)
  const[projectData,setProjectData]=useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImg:""
  })
  console.log(projectData);
  

  const [show, setShow] = useState(false);

  useEffect(()=>{
   if(projectData.projectImg.type=="image/png" || projectData.projectImg.type=="image/jpeg" || projectData.projectImg.type=="image.jpg"){
    setImageFileStatus(true)
    setPreview(URL.createObjectURL(projectData.projectImg))
   }else{
    setImageFileStatus(false)
    setPreview(r1)
    setProjectData({...projectData,projectImg:""})
   }
  },[projectData.projectImg])

  

  const handleClose = () =>{
    
    setShow(false);
    setProjectData({title:"",languages:"",overview:"",github:"",website:"",projectImg:""})
  }
  const handleShow = () => setShow(true);
  const handleSaveProject =async ()=>{
    const {title,languages,overview,github,website,projectImg}=projectData
    if(title && languages  && overview && github && website && projectImg){
    const reqBody =new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("overview",overview)
    reqBody.append("github",github)
    reqBody.append("website",website)
    reqBody.append("projectImg",projectImg)

      const token  =sessionStorage.getItem("token")
      if(token){
        const reqHeader  = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
        }
        try{
const result = await addProjectApi(reqBody,reqHeader)
console.log(result);
if(result.status==200 ){
  handleClose()
  alert("project added successfully")
}else{
  alert(result.response.data)
}
}catch(err){
console.log(err);

        }
      }
    }
    else{
      alert("please fill the form completely")
    }
  }

  return (
   <>
   <button onClick={handleShow} className='btn btn-danger'> <i className='fa-solid fa-plus'></i>New Project</button>
   <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
           <label>
            <input onChange={e=>setProjectData({...projectData,projectImg:e.target.files[0]})} style={{display:'none'}} type="file" />
            <img height={'100px'} width={'200px'} className='img-fluid' src={preview} alt="" />
           </label>
          { !imageFileStatus && <div className='text-danger fw-bolder my-2' >Upload only the following file types(jpeg,jpg,png)</div>}
          </div>
          <div className="col-lg-8">
            <div className='mb-3'>
              <input value={projectData.title} onChange={e=>setProjectData({...projectData,title:e.target.value})} type="text" placeholder='Project Title' className='form-control ' />
            </div>
            <div className='mb-3'>
              <input value={projectData.languages} onChange={e=>setProjectData({...projectData,languages:e.target.value})}   type="text" placeholder='Languages used in the project' className='form-control ' />
            </div>
            <div className='mb-3'>
              <input value={projectData.overview} onChange={e=>setProjectData({...projectData,overview:e.target.value})}  type="text" placeholder='Project OverView' className='form-control ' />
            </div>
            <div className='mb-3'>
              <input value={projectData.github} onChange={e=>setProjectData({...projectData,github:e.target.value})}  type="text" placeholder='Project Github Link' className='form-control ' />
            </div>
            <div className='mb-3'>
              <input value={projectData.website} onChange={e=>setProjectData({...projectData,website:e.target.value})}  type="text" placeholder='Project  website link' className='form-control ' />
            </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      

   </>
  
  )
}

export default Add