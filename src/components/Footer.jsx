import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'black'}} className='container-fluid mt-5 pe-5 m text-light'>
      <div className="row ms-2 pt-5 pb-5">
        <div className="col-4 ">
          <h3> Project Fair</h3>
          <p>Designed and built with all the love and Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam illum minima vero!</p>
        </div>
        <div className="col-2">
          <h4>Links</h4>
          <p>Landing Page</p>
          <p>Home Page</p>
          <p>History Page</p>
        </div>
        <div className="col-2">
          <h4>Guides</h4>
          <p>React</p>
          <p>React Bootstrap</p>
          <p>React Router</p>
        </div>
        <div className="col-4">
          <h5 className="mb-1">Contacts</h5>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <br />
          <i className="fa-brands fa-instagram ms-4"></i>
          <i className="fa-brands fa-twitter ms-4"></i>
          <i className="fa-brands fa-facebook ms-4"></i>
          <i className="fa-brands fa-linkedin ms-4"></i>
          <i className="fa-solid fa-phone ms-4"></i>
          <i className="fa-brands fa-github ms-4"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
