import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'



function Contact() {
  return (
    <>
     <Header/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-10 border rounded my-5 p-4">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <h2 className='text-center text-primary'>Contact Us</h2>
                        <label htmlFor="" className='mt-2'>Name:</label>
                        <input type="text" placeholder='Your Name' className='form-control rounded'/>

                         <label htmlFor="" className='mt-2'>Email:</label>
                        <input type="text" placeholder='Your Name' className='form-control  rounded'/>
                     

                         <label htmlFor="" className='mt-2'>Phone:</label>
                        <input type="text" placeholder='Your Name' className='form-control  rounded'/>
                        

                         <label htmlFor="" className='mt-2'>Message:</label>
                        <textarea name="" id="" placeholder='Your Message' className='form-control  rounded'></textarea>

                       <div className='d-flex align-items-center justify-content-center mt-5'> 
                        <button className='btn btn-primary rounded'>Send Message</button>
                       </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                         <div className='shadow rounded p-5 text-center'>
                             <h2 className='text-center text-primary'>Contact information</h2>
                             <p>123 Main Street</p>
                             <p>Email: contact@example.com</p>
                             <p>Phone: +1 (123) 456-7890</p>
                             <h2 className='text-center text-primary'>Follow us on</h2>
                             <div className='d-flex align-items-center justify-content-evenly text-primary mt-3'>
                                <FontAwesomeIcon icon={faFacebook} size="2xl"/>
                                <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                                <FontAwesomeIcon icon={faSquareXTwitter} size="2xl"/>
                             </div>
                         </div>
                    </Col>
                </Row>

                <div className='mt-5 '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23196943.421076044!2d60.87584891519408!3d19.713400202445428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1792398022800!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>

            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    </>
  )
}

export default Contact