import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import { appliedjobsApi, jobseekerlogApi, postedApi, showappliedApi } from '../../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
import Applied from '../components/Applied';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';






function Joblogin() {
  const[oncl,setOncl] = useState(false)
   const [jobs, setJobs] = useState([]);
  const [loginUser, setLoginUser] = useState("");
   const [loginSuccess, setLoginSuccess] = useState(false);
  const [joblogin, setJobLogin] = useState({
        username: "",
        password: ""
    });
    const [appliedJobsList, setAppliedJobsList] = useState([]);
     const [jobs1, setJobs1] = useState([]);


     const loginJobseeker = async () => {
        const { username, password } = joblogin;

        if (!username || !password) {
            toast.warning('Please fill the form completely');
        } else {
            const result = await jobseekerlogApi();
            const user = result.data.find(user => user.uname === username && user.pswd === password);

            if (user) {
                toast.success('Login successful');
                setLoginSuccess(true);
                setLoginUser(user.uname);
                fetchAppliedJobs(user.uname); 
            } else {
                toast.error('Please register before login');
                setTimeout(()=>{
                                 window.location = '/jobreg';

                },2000)
            }
        }
       };

    const appliedJobs = async (id) => {
    const selectedJob = jobs1.find(job => job.id === id);

    const userResult = await jobseekerlogApi();
    const userDetails = userResult.data.find(
        user => user.uname === loginUser
    );



    selectedJob.uname = loginUser;
    selectedJob.email = userDetails.email;
    selectedJob.name = userDetails.name;
    selectedJob.phone = userDetails.phone;

    const showResult = await showappliedApi();

  /*   const alreadyApplied = showResult.data.some(
        job => job.id === id && job.uname === loginUser
    ); */
    const alreadyApplied = showResult.data.some(
  job => job.jobId === id && job.uname === loginUser
);

      console.log("Logged-in user:", loginUser);
console.log("User details:", userDetails);
console.log("Selected job:", selectedJob);


    if (alreadyApplied) {
        alert('Already applied');
    } else {
        /* await appliedjobsApi(selectedJob); */
        const application = {
  ...selectedJob,
  id: undefined,
  jobId: selectedJob.id,
  uname: userDetails.uname,
  email: userDetails.email,
  name: userDetails.name,
  phone: userDetails.phone
};

const saveResult = await appliedjobsApi(application);
console.log("Saved application:", saveResult.data);

        setAppliedJobsList(prev => [...prev, selectedJob]);

        alert('Job applied successfully');
    }
};

  

    const fetchAppliedJobs = async (username) => {
    const result = await showappliedApi();

    const userJobs = result.data.filter(
        job => job.uname === username
    );

    setAppliedJobsList(userJobs);
};



       useEffect(() => {
           const fetchPostedJobs = async () => {
             const result = await postedApi();
             setJobs1(result.data);
             
           };
           fetchPostedJobs();
       
         }, []);






  return (
   <>
   {!loginSuccess && (<div>
      <Header/>
      <h2 className='text-center text-primary mt-5'>Careerseeker Login</h2>
      <div className='container-fluid'>
          <Row>
              <Col sm={12} md={3}></Col>
              <Col  sm={12} md={6}>
                 <div className='shadow rounded p-5 my-5'>
                      <div className='d-flex align-items-center justify-content-center'>
                         <img src="/emp.png" alt="employer image" width={'100px'}/>
                      </div>
  
                      <input type="text"  onChange={(e) => setJobLogin({ ...joblogin, username: e.target.value })} className='form-control mt-5 rounded' placeholder='Username'/>
                      <input type="password" onChange={(e) => setJobLogin({ ...joblogin, password: e.target.value })} className='form-control mt-3 rounded'  placeholder='Password'/>
  
                     <div className='d-flex align-items-center justify-content-center'>
                       <button onClick={loginJobseeker} className='btn btn-primary rounded mt-4 px-5'>Login</button>
                     </div>
                 </div>
              
              </Col>
              <Col sm={12} md={3}></Col>
          </Row>
      </div>
   </div>)}

    {loginSuccess && (<div>
  
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
  
       <Applied
  jobs1={jobs1}
  login={loginUser}
  appliedJobs={appliedJobs}
  appliedJobsList={appliedJobsList}
/>
    </div>)}

                        <ToastContainer theme='colored' position='top-center' autoClose={2000} />

    </>
  )
}

export default Joblogin