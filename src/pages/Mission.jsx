import React from 'react'
import './Mission.css'
import Header from '../components/Header'


function Mission() {
  return (
    <>
     <Header/>
    <div className='container-fluid my-5'>
         <div className="row">
             <div className="col-md-1"></div>
            <div className="col-md-4">
                <img src="/mission.jpg" alt="mission image" width={'100%'} className='shadow rounded'/>
            </div>
            <div className="col-md-7 text-center p-4 ">
                <h2 className='text-primary'>Our Mission</h2>
                <p>At JOBsearch, our mission is to empower job seekers by providing innovative tools and resources that enhance their career journeys. We are dedicated to connecting talent with opportunity, fostering a supportive environment where individuals can thrive professionally and personally.</p>
            </div>
           
         </div>

         <div className='container-fluid'>
             <h2 className='text-center text-primary mt-5'> Core Values</h2>
             <div className="row my-5 text-center">
                <div className="col-md-3">
                    <div className='shadow p-4 rounded msn' style={{minHeight:'250px'}}>
                         <h5>Empowerment</h5>
                         <p>We believe in empowering individuals with the skills and knowledge needed to navigate their career paths confidently.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='shadow p-4 rounded msn' style={{minHeight:'250px'}}>
                         <h5>Integrity</h5>
                         <p>We are committed to maintaining transparency and honesty in all our interactions, ensuring trust in our relationships with job seekers and employers alike.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='shadow p-4 rounded msn' style={{minHeight:'250px'}}>
                         <h5>Inclusivity</h5>
                         <p>We strive to create an inclusive platform that welcomes diverse backgrounds and experiences, promoting equal opportunities for all.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='shadow p-4 rounded msn' style={{minHeight:'250px'}}>
                         <h5>Innovation</h5>
                         <p>Our focus on continuous improvement drives us to innovate, offering cutting-edge solutions that simplify the job search process and enhance user experience.</p>
                    </div>
                </div>
             </div>
         </div>
    </div>
    </>
  )
}

export default Mission