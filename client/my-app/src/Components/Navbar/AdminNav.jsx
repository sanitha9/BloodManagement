import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AdminNav = () => {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary" style={{paddingTop:'0px'}}>
        
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
            <Nav className="me-auto fun">
              <Nav.Link href="admin">Home</Nav.Link>
              <NavDropdown title="Donor" id="basic-nav-dropdown">
                <NavDropdown.Item href="adddonor">Add Blood Donor</NavDropdown.Item>
                <NavDropdown.Item href="donorinfo">
                  List Donor Info
                </NavDropdown.Item>
                <NavDropdown.Item href="donoractivity">
                Donor Activity
                </NavDropdown.Item>
                <NavDropdown.Item href="listdonoractivity">
                List DonorActivity
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BloodProduct" id="basic-nav-dropdown">
                <NavDropdown.Item href="addbloodproduct">Add Blood Product</NavDropdown.Item>
                <NavDropdown.Item href="listbloodproduct">
                List Blood Product
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="approverequest">Approved Request</Nav.Link>
              <Nav.Link href="bloodbagexpired">Check Blood bag Expired date</Nav.Link>
            
            
              <NavDropdown title="My profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="userreg">Change password</NavDropdown.Item>
                <NavDropdown.Item href="supervisor">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
  )
}

export default AdminNav