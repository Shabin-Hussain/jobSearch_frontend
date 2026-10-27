import Accordion from 'react-bootstrap/Accordion';
import Header from '../components/Header'



function Questions() {
    return (
        <>
         <Header/>
            <h2 className='text-center my-5'>Frequently Asked Questions </h2>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 p-4">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How do I search for a job on JobSearch?</Accordion.Header>
                            <Accordion.Body>
                                <p>There are a number of ways:</p>

                                <ul>
                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li> Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mt-4 border-top'>
                            <Accordion.Header>Where can I find information about looking for a job?</Accordion.Header>
                            <Accordion.Body>
                                <p> There are a number of ways:</p>
                                <ul>

                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li>    Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                          <Accordion.Item eventKey="2" className='mt-4 border-top'>
                            <Accordion.Header>Why do I see MyGovID on my login screen – is it safe?</Accordion.Header>
                            <Accordion.Body>
                                <p> There are a number of ways:</p>
                                <ul>

                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li>    Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                          <Accordion.Item eventKey="3" className='mt-4 border-top'>
                            <Accordion.Header>Where can I find information about looking for a job?</Accordion.Header>
                            <Accordion.Body>
                                <p> There are a number of ways:</p>
                                <ul>

                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li>    Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                          <Accordion.Item eventKey="4" className='mt-4 border-top'>
                            <Accordion.Header>Can I see the jobs I have applied for?</Accordion.Header>
                            <Accordion.Body>
                                <p> There are a number of ways:</p>
                                <ul>

                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li>    Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                          <Accordion.Item eventKey="5" className='mt-4 border-top'>
                            <Accordion.Header>Do I have to complete all the fields on my jobseeker profile to apply for a job?</Accordion.Header>
                            <Accordion.Body>
                                <p> There are a number of ways:</p>
                                <ul>

                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li>    Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                          <Accordion.Item eventKey="6" className='mt-4 border-top'>
                            <Accordion.Header>What is job matching?</Accordion.Header>
                            <Accordion.Body>
                                <p> There are a number of ways:</p>
                                <ul>

                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li>    Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                          <Accordion.Item eventKey="7" className='my-4 border-top'>
                            <Accordion.Header>Do I have to complete all the fields on my jobseeker profile to use job matching?</Accordion.Header>
                            <Accordion.Body>
                                <p> There are a number of ways:</p>
                                <ul>

                                    <li> Fill out the fields on the Search for your next job box, then click the blue arrow to display a list of jobs. Click on the job title to view the details.</li>
                                    <li>    Click on a job displayed on the Top Jobs Today to see the details.</li>
                                    <li> Log into your jobseeker profile and search for jobs. This option also allows you to apply for jobs.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-1"></div>
            </div>


        </>
    )
}

export default Questions