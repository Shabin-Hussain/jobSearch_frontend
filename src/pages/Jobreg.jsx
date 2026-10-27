import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import { toast, ToastContainer } from 'react-toastify';
import { jobseekerlogApi, jobseekerregApi } from '../../services/allApi';




function Jobreg() {
    const [register, setRegister] = useState({
    name: "",
    phone: "",
    email: "",
    uname: "",
    pswd: ""
  });

  const registerjobseeker = async () => {
    const { name, phone, email, uname, pswd } = register;
    if (!name || !phone || !email || !uname || !pswd) {
      toast.error('Please enter the details completely');
    } else {
      const result1 = await jobseekerlogApi();
      const user = result1.data.find(user => user.uname === uname || user.pswd === pswd || user.email === email);
      if (user) {
        toast.warning('Details already registered, please enter new details');
        setTimeout(()=>{
                  window.location = '/jobregister';

        },2000)
      } else {
        const result = await jobseekerregApi(register);
        console.log(result);
        toast.success('Registration successful');
        setTimeout(()=>{
                window.location = '/joblogin';

        },2000)
        
      }
    }
  }



  return (
    <>
     <Header/>

            <h2 className='text-center text-primary my-5'>Register Careerseeker Account</h2>
            
                <Row>
                    <Col sm={12} md={3}></Col>
                    <Col sm={12} md={6}>
                    <div className='shadow rounded p-5 mb-5'>
                        

                        <label htmlFor="" className='mt-3'>Your name</label>
                        <input type="text"  onChange={(e) => setRegister({ ...register, name: e.target.value })}  className='form-control rounded' placeholder='Enter your name'/>


                        <label htmlFor="" className='mt-3'>Phone Number</label>
                        <input type="text"  onChange={(e) => setRegister({ ...register, phone: e.target.value })}  className='form-control rounded' placeholder='Enter your phone number'/>

                        <label htmlFor="" className='mt-3'>Email Address</label>
                        <input type="text"  onChange={(e) => setRegister({ ...register, email: e.target.value })}  className='form-control rounded' placeholder='Enter your email address'/>

                        <label htmlFor="" className='mt-3'>Username</label>
                        <input type="text" onChange={(e) => setRegister({ ...register, uname: e.target.value })}   className='form-control rounded' placeholder='Enter username'/>

                        <label htmlFor="" className='mt-3'>Password</label>
                        <input type="password"  onChange={(e) => setRegister({ ...register, pswd: e.target.value })}  className='form-control rounded' placeholder='Enter password'/>

                        <div className='d-flex align-items-center justify-content-center'>
                            <button onClick={registerjobseeker} className='btn btn-primary rounded mt-5'>Register</button>
                        </div>

                    </div>
                    </Col>
                    <Col sm={12} md={3}></Col>
                </Row>
            
                    <ToastContainer theme='colored' position='top-center' autoClose={2000} />

        </>
  )
}

export default Jobreg