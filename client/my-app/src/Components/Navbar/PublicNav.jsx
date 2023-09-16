import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {AcUnit} from '@mui/icons-material';
const PublicNav = () => {
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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
              {/* <Nav.Link href="#link">Registration</Nav.Link><AcUnit/> */}
              <NavDropdown title="Registration" id="basic-nav-dropdown">
                <NavDropdown.Item href="userreg">User</NavDropdown.Item>
                <NavDropdown.Item href="supervisor">
                  supervisor
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
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

export default PublicNav