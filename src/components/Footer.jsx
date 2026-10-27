import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Footer() {
  return (
    <>
    <div className='container-fluid py-4 border-top'>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3">
                <h4 className='fw-bolder text-primary'>JOBsearch</h4>
                <p style={{fontSize:'15px',textAlign:'justify'}} >Discover your career path with Jobsearch, where job seekers and employers converge. Whether you're a seasoned professional or just starting your career journey, our platform offers a diverse range of opportunities across industries.From full-time positions to freelance gigs, find the job that fits your skills and ambitions. </p>
            </div>
            <div className="col-md-2 ">
                <h5>Jobsearch</h5>
                <h6><a href="/about" style={{textDecoration:'none'}}>About Us</a></h6>
                <h6><a href="/mission" style={{textDecoration:'none'}}>Our Mission</a></h6>
                <h6><a href="/contact" style={{textDecoration:'none'}}>Contact Us</a></h6>
                <h6><a href="/search" style={{textDecoration:'none'}}>Search Jobs</a></h6>
                <h6><a href="/what" style={{textDecoration:'none'}}>What's Going On</a></h6>
                <h6><a href="/tips" style={{textDecoration:'none'}}>Tips and Advice</a></h6>
                 
                
            </div>
            <div className="col-md-2">
                 <h5>Follow Us</h5>
                 <h6><a href="https://www.facebook.com" target="_blank" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faFacebook} size="xl"/>Facebook</a></h6>
                <h6><a href="https://www.instagram.com" target="_blank" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faInstagram} size="xl"/>Instagram</a></h6>
                <h6><a href="https://www.linkedin.com" target="_blank" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faLinkedin} size="xl" />LinkedIn</a></h6>
                <h6><a href="https://x.com" target="_blank" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faSquareXTwitter} size="xl"/>X</a></h6>
            </div>
            <div className="col-md-3">
                 <h5>Send Us a Message</h5>
                 <input type="text" className="form-control mt-1 rounded" placeholder="Your Name"/>
                 <input type="email" className="form-control mt-1 rounded" placeholder="Your Email"/>
                 <textarea name="" id="" placeholder="Your Message" className="form-control mt-1 rounded"></textarea>
                 <button className="btn btn-primary rounded w-100 mt-1">Send</button>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>

    <div className="container-fluid ">
        <h6 className="text-center mb-4 text-primary">@2026 JOBsearch . All rights reserved.</h6>
        
    </div>
    </>
  )
}

export default Footer