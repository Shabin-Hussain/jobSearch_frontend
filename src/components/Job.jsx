import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../components/Job.css'
import { Link } from 'react-router-dom';


function Job({jobs,visibleJobs}) {
    return (
        <>
            <Row >
              {jobs.slice(0,visibleJobs).map((job, index)=>(<Col key={index} sm={12} md={4} lg={4} className='d-flex align-items-center justify-content-center  mt-md-5'>
                    <Card style={{ width: '100%' }} className='rounded shadow  p-3 hvr mb-4'>

                        <Card.Body  key={job.id} className='text-center'>
                            <Card.Title className='text-primary'><h4><b>{job.jobtitle}</b></h4></Card.Title>
                            <Card.Text>
                                <span style={{ fontSize: '12px' }}>Company :</span>  {job.cname}
                            </Card.Text>
                            <Card.Text>
                                <span style={{ fontSize: '12px' }}>Location :</span>  {job.city}
                            </Card.Text>
                            <Card.Text>
                                <span style={{ fontSize: '12px' }}>Posted Date :</span>{job.posteddate}
                            </Card.Text>
                            <Card.Text>
                                <span style={{ fontSize: '12px' }}>End Date :</span> {job.lastdate}
                            </Card.Text>
                            <Link to={'/choose'}><Button className='btn btn-primary rounded px-5'>Apply</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>))  }

            </Row>    

              

              

            

            <div className='d-flex align-items-center justify-content-center mt-4'>
                  <Link to={'/choose'}><button className='btn btn-primary px-3 py-2 rounded'>View More</button></Link>

            </div>

          
        </>
    )
}

export default Job