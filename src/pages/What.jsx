import { faBriefcase, faCircleCheck, faLightbulb, faNewspaper, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'




function What() {
  return (
    <>
     <Header/>
    <h2 className='text-center mt-5'>What's going on?</h2>
    <Row className='p-5 mb-2 '>
        <Col sm={12} md={4}>
        <div className='shadow rounded p-4' style={{minHeight:'240px'}}>
            <h5 className='bg-primary text-center rounded py-2 text-white'><FontAwesomeIcon icon={faBriefcase} className='me-2'/>Featured Jobs</h5>
            <h5>Software Engineer, Marketing Manager...</h5>
            <p>Browse through featured job openings tailored for you. Discover opportunities that match your skills and interests.</p>
        </div>
        </Col>
         <Col sm={12} md={4}>
        <div className='shadow rounded p-4' style={{minHeight:'240px'}}>
            <h5 className='bg-primary text-center rounded py-2 text-white'><FontAwesomeIcon icon={faNewspaper} className='me-2'/> Job Market Insights</h5>
            <ul>
              <li>Explore industries that are currently hiring.</li>
              <li>Discover the skills that are in high demand.</li>
              <li>Stay updated on current salary trends.</li>
            </ul>
        </div>
        </Col>
         <Col sm={12} md={4}>
        <div className='shadow rounded p-4' style={{minHeight:'240px'}}>
            <h5 className='bg-primary text-center rounded py-2 text-white'><FontAwesomeIcon icon={faLightbulb} className='me-2'/> Career Tips</h5>
              <ul>
              <li>Tips for writing a standout resume.</li>
              <li>Strategies for successfull interview preparation.</li>
              <li>Effective networking tips and strategies.</li>
            </ul>
        </div>
        </Col>
  
      <Col sm={12} md={6} className='mt-md-5'>
      <div className='shadow p-4 rounded '>
        <h5 className='text-center bg-primary py-2 rounded text-white'><FontAwesomeIcon icon={faPeopleGroup} className='me-2'/>Featured Companies</h5>
        <h5>Google, Microsoft, Apple...</h5>
        <p>Explore opportunities at leading companies known for their innovation and growth.</p>
      </div>
      </Col>
      <Col sm={12} md={6}  className='mt-md-5'>
      <div className='shadow p-4 rounded'>
        <h5 className='text-center bg-primary py-2 rounded text-white'><FontAwesomeIcon icon={faCircleCheck} className='me-2'/> Success Stories</h5>
        <h5>John Doe, Marketing Director</h5>
        <p>Read inspiring success stories from professionals who found their dream jobs through ManyJobs.com.</p>
      </div>
      </Col>
    </Row> 
    </>
  )
}

export default What