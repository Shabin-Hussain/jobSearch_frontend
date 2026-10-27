
import { Link } from 'react-router-dom'
import Job from '../components/Job'
import './Home.css'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { postedApi } from '../../services/allApi'





function Home() {
     const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(6);

  useEffect(() => {
    const fetchPostedJobs = async () => {
      const result = await postedApi();
      setJobs(result.data);
    };
    fetchPostedJobs();
  }, []);
    return (
        <>

         <Header/>


            <div style={{ height: '100vh' }} className='bg-primary home'>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 ">
                        <h1 className='text-center mt-5 pt-5 text-white' style={{ fontSize: '55px' }}><b>JOBsearch</b></h1>
                        <h6 className='mt-3 text-center text-white' >At JobSearch, we aim to help people get jobs and help employers connect with the right people.</h6>
                        <h6 className='mt-3 text-center text-white'>Whether you're looking for your next job or finding the right person to join your team, JobSearch can help you.</h6>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>

            <div className="row p-5 bg-primary">
                <div className="col-md-6">
                    <h2 className='text-center text-white'>A job isn't just a job. <br /> It's who you are.</h2>
                </div>
                <div className="col-md-6 ">
                    <div className='row'>
                        <div className="col-4"></div>
                        <div className="col-4">
                            <h5 className='text-white'>Search Job</h5>
                            <Link  className='btn btn-dark rounded'to={'/search'} >Search</Link>
                        </div>
                        <div className="col-4"></div>

                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <h2 className='text-center text-primary'>Top Jobs</h2>
                <h4 className='text-center '>We have {jobs.length} available opportunities</h4>
            </div>

            <div className='p-5'>
                <Job jobs={jobs} visibleJobs={visibleJobs}/>
            </div>

            <div className='container-fluid p-4'>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 shadow rounded p-4">
                          <div className="row ">
                    <div className="col-md-8">
                        <h2 className='text-center text-primary fw-bolder' style={{fontSize:'30px'}}>Are you an employer? <br /> Advertise your job for free now</h2>
                    </div>
                    <div className="col-md-4 ">
                        <div className='row'>
                            <div className="col-4"></div>
                            <div className="col-4 d-flex align-items-center justify-center-center mt-md-4">
                                
                                <Link to={'/choose'}><button className='btn btn-dark rounded' >Advertise</button></Link>
                            </div>
                            <div className="col-4"></div>
    
                        </div>
                    </div>
                </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
               
            </div>

            <div className='container-fluid my-5'>
               <div className="row ">
                <div className="col-md-1"></div>
                <div className="col-md-10 border p-3 rounded bg-dark">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className='border-bottom'><h3 className='bg-primary rounded'>250,000+</h3></div>
                            <h3 className='text-white'>Matches per <br /> annum</h3>
                        </div>
                        <div className="col-md-3 text-center">
                             <div className='border-bottom'><h3 className='bg-primary rounded'>126</h3></div>
                            <h3 className='text-white'>Local Offices</h3>
                        </div>
                        <div className="col-md-3 text-center">
                             <div className='border-bottom'><h3 className='bg-primary rounded'>24/7</h3></div>
                            <h3 className='text-white'>Access to jobs</h3>
                        </div>
                        <div className="col-md-3 text-center">
                             <div className='border-bottom'><h3 className='bg-primary rounded'>31</h3></div>
                            <h3 className='text-white'>EU/EEA Countries</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
               </div>
            </div>






        </>
    )
}

export default Home