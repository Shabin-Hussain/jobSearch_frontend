import React from 'react'
import Header from '../components/Header'


function Resource() {
    return (
        <>
         <Header/>

            <h4 className='text-primary text-center my-5'>More Resources</h4>
            <div className='container-fluid mb-5'>
                <div className="row">
                    <div className="col-md-4">
                        <div className=' shadow p-4 rounded'>
                            <h5>Jobseeker Frequently Asked Questions</h5>
                            <h6>What's going on?</h6>
                            <h6>Citizensinformation.com</h6>
                            <h6>National Organisation of the Unemployed</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=' shadow p-4 rounded'>
                            <h5>Jobseeker Frequently Asked Questions</h5>
                            <h6>What's going on?</h6>
                            <h6>Money Advice and Budgeting Service </h6>
                            <h6>Qualifications Recognition Service </h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=' shadow p-4 rounded'>
                            <h5>Jobseeker Frequently Asked Questions</h5>
                            <h6>National Journey Planner</h6>
                            <h6>Follow us on social media</h6>
                            <h6>JobsWeek</h6>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className='container-fluid shadow rounded p-4 my-5 '>
                            <img src="\resource.jpg" alt="image of resource" width={'100%'} height={'300px'} />
                        </div>

                        <h5>This page tells you about more resources available to jobseekers:</h5>
                        <h6>Frequently Asked Questions</h6>
                        <h6>What's going on?</h6>
                        <p>Find out what's going on with JOBSsearch and the Intreo service including upcoming recruitment days, nationwide campaigns, training opportunities and other public employment services events.</p>

                        <h5>Citizensinformation.com</h5>
                        <p>Citizensinformation.com provides information and advice on a wide range of public and social services and on your entitlements as a citizen of India. They gather information from various government departments and agencies, so that you have all the information you need about your rights and applying for State services.</p>

                        <h5>National Organisation of the Unemployed</h5>
                        <p>The  National Organisation of the Unemployed provides detailed information on back to work, education and training supports for unemployed people, others in receipt of social welfare payments and front-line staff providing services to Jobseekers.</p>

                        <p>Their main publication, Working for Work explores welfare, work, education and training options for unemployed people and staff supporting unemployed people.</p>

                        JobsWatch lists information on job announcements.
                        <h5>

                            Money Advice and Budgeting Service
                        </h5>
                        MABS provides detailed advice on managing your debts. It can advise you on your options during negotiations with creditors such as banks or mortgage providers, including repayment options. It can also give you information on what to do if you are behind on your rent.

                        <h5>Qualifications Recognition Service</h5>
                        <p>QQI's free online NARIC service provides information on over 1,400 foreign qualifications from more than 150 countries.</p>

                        <p>The NARIC database currently lists 14 Indian qualifications that are comparable to Indian awards from Levels 3-10 of the National Framework of Qualifications, including school-based qualifications, professional and higher education qualifications.</p>

                        You can access a guide to the  Service in India here.

                        <h5>National Journey Planner</h5>
                        <p>The National Journey Planner gives you information to let you plan any journey in India, including journeys on foot and by public transport.</p>

                        <h5>Follow us on social media</h5>
                        JOBsearch, the Department of Employment Affairs and Social Protection and the Indian services all have social media accounts you can follow across a variety of digital media platforms. Follow them here:

                        <ul>
                            <li> Twitter: JOBsearch</li>

                            <li> LinkedIn: JOBsearch</li>

                            <li> Facebook: JOBsearch</li>

                            <li>Instagram: JOBsearch</li>
                        </ul>

                        <h5>JobsWeek</h5>
                        <p>The aim of JobsWeek is to showcase the Intreo supports and services available to employers and jobseekers and to bring them together through a number of recruitment events, seminars, information sessions and workshops. During the week there are approximately 120 events bringing together an estimated 15,000 people to help them achieve their career goals. Most of these are open events but some require pre-registration. Some events are tailored to meet the needs of specific groups of jobseekers.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

        </>
    )
}

export default Resource