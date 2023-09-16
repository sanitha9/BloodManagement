import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const UserNav = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
        
        <Container fluid className='navbody'>
        
          <Navbar.Brand href="#home" > <img
                alt=""
                src="/img/logo.jpg"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />{' '}HemoGlob</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            
            
              <Nav.Link href="#link">Aboutus</Nav.Link>
              <Nav.Link href="#link">contactus</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              <NavDropdown title="Registration" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.3">Headofficer</NavDropdown.Item>
               
                {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
          
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">View Profile</NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
               
                {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    
    </>
  )
}

export default UserNav