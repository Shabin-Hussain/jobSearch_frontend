import { faBriefcase, faCalendarDays, faCalendarXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'



function Applied({jobs1,login,appliedJobs,appliedJobsList}) {
  return (
    <>
    <h2 className='text-center text-primary my-5'>Applied Jobs</h2>

    <div className='container-fluid'>
        <Row>
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={10}>
            <div className='shadow rounded  p-4'>
                  <div className='table-responsive'>
                <table className='table border'>
                    <thead>
                        <tr>
                            <th className='border-end'>Job Title</th>
                            <th className='border-end'>Company Name</th>
                            <th className='border-end'>Job Location</th>
                            <th className='border-end'>Job Type</th>
                            <th className='border-end'>Pay</th>
                            <th className='border-end'>Closing Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appliedJobsList.map((item,index)=>(<tr  key={`${item.uname}-${item.jobId ?? item.id}-${index}`}>
                            <td className='border-end'>{item.jobtitle}</td>
                            <td className='border-end'>{item.cname}</td>
                            <td className='border-end'>{item.address}</td>
                            <td className='border-end'>{item.jobtype}</td>
                            <td className='border-end'>{item.pay}</td>
                            <td className='border-end'>	{item.lastdate}</td>
                           
                        </tr>
                         ))}
                    </tbody>
                </table>
           </div>
 
            </div>
            </Col>
            <Col sm={12} md={1}></Col>
        </Row>

        <Row className='p-4'>
            {jobs1?.length >0 ? jobs1.map((item)=>(<Col sm={12} md={4} lg={4} key={item.id} className='mt-2'>
            <div className='border rounded shadow p-4'>
               <div className='row'>
                    <div className="col-md-4">
                        <img src="/emp.png" alt="" width={'100px'}/>
                    </div>
                    <div className="col-md-8">
                        <h5>{item.jobtitle}</h5>
                        <h6 className='mt-1'><FontAwesomeIcon icon={faBriefcase} /><span style={{fontSize:'12px'}}>Company:</span>{item.cname} </h6>
                         <h6 className='mt-1'><FontAwesomeIcon icon={faCalendarDays} /><span style={{fontSize:'12px'}}>Publish on:</span>{item.posteddate} </h6>
                          <h6 className='mt-1'><FontAwesomeIcon icon={faLocationDot} />{item.address}</h6>
                           <h6 className='mt-1'><FontAwesomeIcon icon={faCalendarXmark} /><span style={{fontSize:'12px'}}>Closing on:</span> {item.lastdate}</h6>
                        
                    </div>
                    <div className='d-flex aign-items-center justify-content-center'>
                       <button /* onClick={()=>set(true)} */  onClick={() => appliedJobs(item.id)} className='btn btn-primary rounded px-4 mt-2'>Apply</button>
                    </div>
               </div>

            </div>
            </Col>)) : 
            <p>No jobs to display</p>}
        </Row>
    </div>
    </>
  )
}

export default Applied