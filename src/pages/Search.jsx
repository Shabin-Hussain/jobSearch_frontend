import { faBuilding, faCalendarDays, faCalendarXmark, faLocationDot, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'
import { useEffect, useState } from 'react'
import { postedApi } from '../../services/allApi'
import { Link } from 'react-router-dom'


function Search() {
    const[jobs, setJobs] = useState(0)


    const allJobs = async()=>{
       const result = await postedApi()
       setJobs(result.data)
    }

    console.log(jobs);


    useEffect(()=>{
       allJobs()
    },[])
    
  return (
    <>
     <Header/>
    {/* <div className='container-fluid'>
        <div className="row my-5">
            <div className="col-md-1"></div>
            <div className="col-md-10 rounded shadow p-5">
              <h4 className='text-center mb-3 text-primary'>Search for your next job</h4>
              <div className="row">
                <div className="col-md-6">
                    <label htmlFor="">Company</label>
                    <input type="text" placeholder='Tcs, Wipro etc.' className='form-control rounded'/>

                    <label htmlFor="" className='mt-4'>Job Type</label> 
                    <input type="text" placeholder='Permanent,Full-time etc.' className='form-control rounded'/>

                     <label htmlFor="" className='mt-4'>Salary</label> 
                    <input type="text" placeholder='150000,200000 etc.' className='form-control rounded'/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder='Bangalore, Kochi etc.' className='form-control rounded'/>

                    <label htmlFor="" className='mt-4'>Job Title</label> 
                    <input type="text" placeholder='Software, Web Developer etc.' className='form-control rounded'/>

                     <label htmlFor="" className='mt-4'>Sector</label> 
                    <input type="text" placeholder='Private, Public etc.' className='form-control rounded'/>
                </div>
                 <button className='w-100 btn btn-primary rounded mt-4'>Search</button>
              </div>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div>
           
        </div>

    </div> */}

    <div className='container-fluid my-5'>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 shadow p-5">
           

            <div className='container-fluid my-2'>
               {jobs?.length>0 ? 
               <>
                    <h2 className='text-center text-primary mb-5'>{jobs.length} Jobs Found</h2>
                  {jobs?.map((item)=>( <div className="row shadow p-4 rounded mb-3">
                        <div className="col-md-2 d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faUserTie} size="2xl" style={{color: "rgb(116, 192, 252)",}} />
                        </div>
                        <div className="col-md-4">
                            <h5>{item.jobtitle}</h5>
                            <h6><FontAwesomeIcon icon={faBuilding} style={{color: "rgb(116, 192, 252)",}} /><span style={{fontSize:'14px'}}>Company:</span> {item.cname}</h6>
                            <h6><FontAwesomeIcon icon={faCalendarDays} style={{color: "rgb(116, 192, 252)",}} /><span style={{fontSize:'14px'}}>Published on:</span> {item.posteddate}</h6>
                        </div>
                        <div className="col-md-4 align-self-end">
                            <h6><FontAwesomeIcon icon={faLocationDot} style={{color: "rgb(116, 192, 252)",}} /> {item.city} </h6>
                              <h6><FontAwesomeIcon icon={faCalendarXmark} style={{color: "rgb(116, 192, 252)",}} /><span style={{fontSize:'14px'}}>Closing on:</span> {item.lastdate}</h6>
                        </div>
                        <div className="col-md-2">
                            <p className='text-danger' style={{fontSize:'10px'}}>Please Login to Apply!</p>
                           <Link to={'/choose'}> <button className='btn btn-primary rounded'>Login</button></Link>
                        </div>
                    </div>))}
               </>
                :
                <p className='text-center text-warning fs-3'>No jobs to display</p>}

            </div>

            
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Search