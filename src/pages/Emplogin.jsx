import React, { useEffect, useState } from 'react'
import { Button, Col, Row} from 'react-bootstrap'
import { emploginApi } from '../../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Post from '../components/Post';

 



function Emplogin() {

  const [loginsuccess, setLoginSuccess] = useState(false);

  const [employeelogin, setEmployeelogin] = useState({
    username: "",
    password: ""
  });

  console.log(employeelogin);

  
  const handlelogin = async () => {
    const { username, password } = employeelogin;

    if (!username || !password) {
      toast.error('Please fill the form completely');
    } else {
      const result = await emploginApi();
      const user = result.data.find(user => user.username === username && user.password === password);
      if (user) {
        toast.success('Login successful');
        setLoginSuccess(true);
        localStorage.setItem('loggedInUser', JSON.stringify(user)); 
      } else {
        toast.error('Please register before logging in');
        setTimeout(()=>{
           window.location.href = '/empreg';
        },2000)
       
      }
    }
  };

  useEffect(() => {
    setLoginSuccess(false);
  }, [employeelogin]);

  


  return (
    <>
   {!loginsuccess && ( <div>
       <Header/>
      <h2 className='text-center text-primary mt-5'>Employer Login</h2>
      <div className='container-fluid'>
          <Row>
              <Col sm={12} md={3}></Col>
              <Col  sm={12} md={6}>
                 <div className='shadow rounded p-5 my-5'>
                      <div className='d-flex align-items-center justify-content-center'>
                         <img src="/emp.png" alt="employer image" width={'100px'}/>
                      </div>
  
                      <input type="text" onChange={(e) => setEmployeelogin({ ...employeelogin, username: e.target.value })} className='form-control mt-5 rounded' placeholder='Username'/>
                      <input type="password" onChange={(e) => setEmployeelogin({ ...employeelogin, password: e.target.value })}  className='form-control mt-3 rounded'  placeholder='Password'/>
  
                     <div className='d-flex align-items-center justify-content-center'>
                       <button  onClick={handlelogin} className='btn btn-primary rounded mt-4 px-5'>Login</button>
                     </div>
                 </div>
              
              </Col>
              <Col sm={12} md={3}></Col>
          </Row>
      </div>
     </div>)}

    {loginsuccess && ( 
     <div>
        <Navbar expand="lg" className="bg-body-secondary shadow">
        <Container>
          <Navbar.Brand href="/"><h2><b className='text-primary'>JOBsearch</b></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
             
  
               <Nav.Link href="#home">Manage Jobs</Nav.Link>
  
               <Nav.Link href="#home">Change Password</Nav.Link>
  
             
            </Nav>
  
            <Button className='btn btn-danger rounded'  onClick={() => { setLoginSuccess(false); localStorage.removeItem('loggedInUser'); }}> <Link to={'/'} className='text-white'  style={{textDecoration:'none'}} >Logout</Link></Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Post user3={employeelogin.username}/>
     </div>

    
  
      )}

   
                <ToastContainer theme='colored' position='top-center' autoClose={2000} />

    </>
  )
}

export default Emplogin