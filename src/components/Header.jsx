import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
       <Navbar expand="lg" className="bg-body-secondary shadow">
      <Container>
        <Navbar.Brand href="/"><h2><b className='text-primary'>JOBsearch</b></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Jobseekers" id="basic-nav-dropdown" className='ms-md-2'>
              <NavDropdown.Item href="/search">Search For Your Next Job</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tips">
                Tips and Advise
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/resource">More Resources</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/questions">
                Frequently Asked Questions
              </NavDropdown.Item>
            </NavDropdown>

             <NavDropdown title="Employers" id="basic-nav-dropdown" className='ms-md-2'>
              <NavDropdown.Item href="/choose">Advertise Your Job</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/choose">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/choose">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>

             <NavDropdown title="About" id="basic-nav-dropdown" className='ms-md-2'>
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/mission">
                Our Mission
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/what">
                What's Going On
              </NavDropdown.Item>
            </NavDropdown>

           
          </Nav>

           <Link to={'/choose'}  className='btn btn-primary rounded'>Login/Register</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header