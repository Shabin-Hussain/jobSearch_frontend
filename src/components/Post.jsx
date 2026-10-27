import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from './Header'
import { advertiseApi, deletejobApi, postedApi, showappliedApi } from '../../services/allApi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





function Post({ user3 }) {
    const [res, setRes] = useState([])
    const [showj, setShowJ] = useState(false)
    const [clickid, setClickId] = useState("");
    const [modalShow, setModalShow] = React.useState(false);
    const [advertisejobs, setAdvertiseJobs] = useState({
        cname: "",
        jobtitle: "",
        city: "",
        address: "",
        jobtype: "",
        pay: "",
        lastdate: "",
        username: user3,
        posteddate: "",
        description: ""
    });
    const [result2, setResult2] = useState([]);

    console.log(advertisejobs);

    const handleSubmit = () => {
        setAdvertiseJobs({
            cname: "",
            jobtitle: "",
            city: "",
            address: "",
            jobtype: "",
            pay: "",
            lastdate: "",
            username: user3,
            posteddate: "",
            description: ""
        });
    };

    const submitJob = async (e) => {
        e.preventDefault();

        const { cname, jobtitle, city, address, jobtype, pay, lastdate, posteddate, description } = advertisejobs;

        if (!cname || !jobtitle || !city || !address || !jobtype || !pay || !lastdate || !posteddate || !description) {
            alert('Please fill in all fields.');
        } else {
            const data = {
                cname,
                jobtitle,
                city,
                address,
                jobtype,
                pay,
                lastdate,
                username: user3,
                posteddate,
                description
            };
            console.log(data);
            const result = await advertiseApi(data);
            console.log(result);
            postedJobs();
            alert('Job posted successfully!');
            handleSubmit();
        }
    };

    const postedJobs = async () => {
        const result1 = await postedApi();
        const result4 = result1.data.filter(usr => usr.username === user3);
        setResult2(result4);
    };



    const deletejob = async (id) => {
        const result5 = await deletejobApi(id);
        console.log(result5);
        postedJobs();
    };


    const getclickId = (id) => {
        console.log(id);
        setClickId(id);
    };


    /*   const jobresponse = async (jobId) => {
          const result = await showappliedApi()
          console.log(result);
          const result1 = result.data.filter( job => job.id === jobId)
          console.log(result1);
         setRes(result1);
      setShowJ(true);
   */


    /* if (result1.find(flt => flt.id === showid)) {

        console.log(' applied');

        setRes(result1)
        setShowJ(true)
    }
    else if (result1.find(flt => flt.id !== showid)) {
        console.log('not applied');

        setShowJ(false)




    } */
    /*   } */

const jobresponse = async (jobId) => {
  try {
    const result = await showappliedApi();

    const result1 = result.data.filter((job) => {
      const appliedJobId = job.jobId ?? job.id;

      return (
        job.username === user3 &&
        String(appliedJobId) === String(jobId)
      );
    });

    console.log("All applications:", result.data);
    console.log("Filtered applicants:", result1);

    setRes(result1);
    setShowJ(true);
  } catch (error) {
    console.error("Error fetching applicants:", error);
  }
};




    useEffect(() => {
        postedJobs();
        setShowJ(false);
    }, [user3]);


    return (

        <>

            {/* <Header/> */}

            <div className='container-fluid'>
                <Row>
                    <Col sm={12} md={1}></Col>
                    <Col sm={12} md={10}>
                        <div className='border rounded p-4 my-5'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5>Employer</h5>
                                <p href="" className='text-primary' style={{ textDecoration: 'none' }}>Click here to advertise your job<FontAwesomeIcon icon={faCircleArrowRight} /></p>
                            </div>
                            <h5 className='text-center text-primary'>Posted Jobs</h5>

                            <div className='table-responsive'>
                                <table className='table border'>
                                    <thead>
                                        <tr>
                                            <th className='border-end'>Posted Date</th>
                                            <th className='border-end'>Job Title</th>
                                            <th className='border-end'>City</th>
                                            <th className='border-end'>Job Type</th>
                                            <th className='border-end'>Pay</th>
                                            <th className='border-end'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {result2.length > 0 ? (
                                            result2.map((item) => (<tr key={item.id}>
                                                <td className='border-end'>{item.posteddate}</td>
                                                <td className='border-end'>{item.jobtitle}</td>
                                                <td className='border-end'>{item.city}</td>
                                                <td className='border-end'>{item.jobtype}</td>
                                                <td className='border-end'>{item.pay}</td>
                                                <td className='border-end'>
                                                    <div className='d-flex align-items-center justify-content-between'>
                                                        <button className='btn btn-danger rounded' onClick={() => { deletejob(item.id), setShowJ(false) }}>Delete</button>
                                                        {/* <button onClick={() => { setModalShow(true); getclickId(item.id), jobresponse(item.id); }} className='btn btn-primary rounded'>Response</button> */}
                                                        <button
                                                            onClick={() => {
                                                                setModalShow(true);
                                                                getclickId(item.id);
                                                                jobresponse(item.id);
                                                            }}
                                                            className="btn btn-primary rounded"
                                                        >
                                                            Response
                                                        </button>

                                                    </div>
                                                </td>
                                            </tr>)))
                                            : (
                                                <tr>
                                                    <td colSpan="6" className='text-center'>No jobs posted</td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <Row>
                                    <Col sm={12} md={1}></Col>
                                    <Col sm={12} md={10}>
                                        <div className='shadow border p-4 mt-5 '>
                                            <div className=' text-center'>
                                                <img src="/post.png" alt="post a job" width={'90px'} />
                                                <h5>Post a job</h5>
                                            </div>
                                            <label htmlFor="" className='mt-3'>Company Name</label>
                                            <input type="text" value={advertisejobs.cname}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, cname: e.target.value })} className='form-control rounded shadow' />

                                            <label htmlFor="" className='mt-3'>Job Title</label>
                                            <input type="text" value={advertisejobs.jobtitle}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, jobtitle: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>City</label>
                                            <input type="text" value={advertisejobs.city}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, city: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>Address</label>
                                            <input type="text" value={advertisejobs.address}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, address: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>Job Type</label>
                                            <input type="text" value={advertisejobs.jobtype}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, jobtype: e.target.value })} className='form-control rounded  shadow' />

                                            <label htmlFor="" className='mt-3'>Pay</label>
                                            <input type="text" value={advertisejobs.pay}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, pay: e.target.value })} className='form-control rounded  shadow' />

                                            <label htmlFor="" className='mt-3'>Last Date to Apply</label>
                                            <input type="text" value={advertisejobs.lastdate}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, lastdate: e.target.value })} className='form-control rounded  shadow' />


                                            <label htmlFor="" className='mt-3'>Posted Date</label>
                                            <input type="text" value={advertisejobs.posteddate}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, posteddate: e.target.value })} className='form-control rounded  shadow' />

                                            <label htmlFor="" className='mt-3'>Description</label>
                                            <textarea name="" value={advertisejobs.description}
                                                onChange={(e) => setAdvertiseJobs({ ...advertisejobs, description: e.target.value })} id="" className='form-control rounded  shadow'></textarea>

                                            <div className='d-flex align-items-center justify-content-center'>
                                                <button onClick={submitJob} className='btn btn-success mt-3 rounded px-5'>Post</button>
                                            </div>


                                        </div>
                                    </Col>
                                    <Col sm={12} md={1}></Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={1}></Col>
                </Row>


            </div>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Details of jobseekers applied for this job
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-4">Name:</div>
                        <div className="col-md-4">Email:</div>
                        <div className="col-md-4">Phone:</div>
                    </div>
                    {showj && (<div>
                        {res?.map((item) => (<div key={item.id} className="row">
                            <div className="col-md-4">{item.name}</div>
                            <div className="col-md-4">{item.email}</div>
                            <div className="col-md-4">{item.phone}</div>
                        </div>))

                        }

                    </div>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)} className='rounded'>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Post