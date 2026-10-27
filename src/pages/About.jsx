import React from 'react'
import './About.css'
import Header from '../components/Header'


function About() {
  return (
    <>
    <Header/>
    <div className='container-fluid'>
       <div className='row'>
            <div className="col-md-7 p-4 text-center">
                <h2 className='text-primary my-4'>About JOBsearch</h2>
                <p>At JOBsearch, we believe that everyone deserves the opportunity to build a successful career. Our platform helps job seekers discover exciting career opportunities and connects them with employers looking for the right talent.</p>
                <p>We aim to make job searching simple, accessible, and efficient by bringing career opportunities and talented professionals together in one place.</p>
            </div>
            <div className="col-md-4 p-2 shadow rounded my-4">
                <img src="/IT.png" alt="professional" width={'100%'} className='rounded'/>
            </div>
            <div className="col-md-1"></div>
       </div>

       <div className="row my-5">
        <div className="col-md-4">
            <div  className='shadow rounded p-5 shd'>
                <h5>Our Mission</h5>
                <p>To simplify the job search process by helping people find the right opportunities and empowering them to take the next step in their careers.</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className='shadow rounded p-5 shd'>
                <h5>Our Vision</h5>
                <p>To become a trusted platform where talent meets opportunity, helping individuals grow professionally and organizations build successful teams.</p>
            </div>
        </div>
        <div className="col-md-4">
            <div className='shadow rounded p-5 shd'>
                <h5>Our Values</h5>
                <p>To create a supportive and transparent job search experience by promoting trust, equal opportunities, and professional growth for every job seeker.</p>
            </div>
        </div>
       </div>

    </div>
    
    </>
  )
}

export default About