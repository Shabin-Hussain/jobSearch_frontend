import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'



function Choose() {
  return (
    <>
     <Header/>
    <div className='container-fluid my-5'>
        <h2 className='text-primary text-center my-5'>Choose how to access the portal</h2>
       <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 shadow p-5">
            <Row>
                <Col sm={12} md={6} >
                   <div className='rounded shadow p-4'>
                      <h2 className='text-center'>Employer</h2>
                      <img src="/employer.png" alt="" width={'100%'}/>
                      <Link to={'/emplogin'} className='btn btn-primary mt-3 rounded' style={{width:'100%'}}>Login</Link>
                      <p className='text-center mt-1'>or</p>
                      <Link to={'/empreg'} className='btn btn-primary rounded' style={{width:'100%'}}>Register</Link>
                   </div>
                </Col>
                <Col sm={12} md={6}>
                <div className='rounded shadow p-4'>
                     <h2 className='text-center'>Jobseeker</h2>
                     <img src="/jobseeker.png" alt="" width={'100%'}/>
                      <Link to={'/joblogin'} className='btn btn-primary mt-3 rounded' style={{width:'100%'}}>Login</Link>
                      <p className='text-center mt-1'>or</p>
                      <Link to={'/jobreg'} className='btn btn-primary rounded' style={{width:'100%'}}>Register</Link>
                   </div>
                </Col>
            </Row>
        </div>
        <div className="col-md-2"></div>
       </div>
    </div>
    </>
  )
}

export default Choose