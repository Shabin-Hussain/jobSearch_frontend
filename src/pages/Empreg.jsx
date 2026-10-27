import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import { emploginApi, empregApi } from '../../services/allApi';
import Header from '../components/Header'




function Empreg() {
    const [Empreg, setEmpreg] = useState({
        cname: "",
        employees: "",
        name: "",
        phone: "",
        email: "",
        username: "",
        password: ""
    })

    console.log(Empreg);


    const handleRegister = async () => {
        const { cname, employees, name, phone, email, username, password } = Empreg

        if (!cname || !employees || !name || !phone || !email || !username || !password) {
            toast.error('Please fill the form completely')
        }
        else {
            try {
                const result1 = await emploginApi();
                console.log(result1);

                const user = result1.data.find(user => user.username === username || user.password === password || user.email === email);

                if (user) {
                    toast.error('User already existing');
                    window.location = '/emplogin';

                } else {
                    const result = await empregApi(Empreg);
                    toast.success('Registration Successfull')
                    setTimeout(() => {
                        window.location.href = '/emplogin';
                    }, 2000);
                }
            } catch (error) {
                console.error('Registration error:', error);
                toast.error('An error occurred during registration');
            }
        }
    }



    return (
        <>

         <Header/>

            <h2 className='text-center text-primary my-5'>Register Employer Account</h2>

            <Row>
                <Col sm={12} md={3}></Col>
                <Col sm={12} md={6}>
                    <div className='shadow rounded p-5 mb-5'>
                        <label htmlFor="" className='mt-3'>Company Name</label>
                        <input type="text" value={Empreg.cname} onChange={(e) => setEmpreg({ ...Empreg, cname: e.target.value })} className='form-control rounded' placeholder='Enter your company name' />

                        <label htmlFor="" className='mt-3'>Total Employees</label>
                        <input type="text" value={Empreg.employees} onChange={(e) => setEmpreg({ ...Empreg, employees: e.target.value })} className='form-control rounded' placeholder='Number of Employees in your company' />

                        <label htmlFor="" className='mt-3'>Your name</label>
                        <input type="text" value={Empreg.name} onChange={(e) => setEmpreg({ ...Empreg, name: e.target.value })} className='form-control rounded' placeholder='Enter your name' />


                        <label htmlFor="" className='mt-3'>Phone Number</label>
                        <input type="text" value={Empreg.phone} onChange={(e) => setEmpreg({ ...Empreg, phone: e.target.value })} className='form-control rounded' placeholder='Enter your phone number' />

                        <label htmlFor="" className='mt-3'>Email Address</label>
                        <input type="text" value={Empreg.email} onChange={(e) => setEmpreg({ ...Empreg, email: e.target.value })} className='form-control rounded' placeholder='Enter your email address' />

                        <label htmlFor="" className='mt-3'>Username</label>
                        <input type="text" value={Empreg.username} onChange={(e) => setEmpreg({ ...Empreg, username: e.target.value })} className='form-control rounded' placeholder='Enter username' />

                        <label htmlFor="" className='mt-3'>Password</label>
                        <input type="text" value={Empreg.password} onChange={(e) => setEmpreg({ ...Empreg, password: e.target.value })} className='form-control rounded' placeholder='Enter password' />

                        <div className='d-flex align-items-center justify-content-center'>
                            <button className='btn btn-primary rounded mt-5' onClick={handleRegister}>Register</button>
                        </div>

                    </div>
                </Col>
                <Col sm={12} md={3}></Col>
            </Row>

            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
        </>
    )
}

export default Empreg