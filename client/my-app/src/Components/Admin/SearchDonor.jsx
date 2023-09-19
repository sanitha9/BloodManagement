import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminNav from '../Navbar/AdminNav'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
const SearchDonor = () => {
  return (
    <>
     <AdminNav/>
     <div className='panel-heading'>

    
        <h1>Blood Stock Availability</h1>
   
    </div>
     <div className='boxcontainer'>
   
  
      



    <form className='form-reg container-sm' style={{padding:'20px'}} >
        <Row>
            <Col lg={6}>
        
        <div className='reg-group'>
        <Form.Select size="lg">
        <option>Select District </option>
        <option>Select District </option>
        <option>Select District </option>
        <option>Select District </option>

        <option>Select District </option>
      </Form.Select>
        </div>
       <div className='blooddonorinfo'>


       </div>
       
      
        
        </Col>
        <Col lg={6}>
       
        <div className='reg-group'>
        <Form.Select size="lg">
        <option>Blood Groups</option>
        <option>Blood Groups</option>
        <option>Blood Groups</option>
        <option>Blood Groups</option>
        <option>Blood Groups</option>
        <option>Blood Groups</option>
        <option>Blood Groups</option>

      </Form.Select>
        </div>
       
        </Col>
          </Row>
          <Row>
            <Col lg={6}>
              
          <button className="btn btn-success"style={{marginLeft:'400px'}}>Search</button>
       
      </Col>
      </Row>
        </form>
        <div >
            <h1>Searched Result</h1>
            <Table striped bordered hover size="sm">
      <thead>
        <tr>
        <th>Donor Id</th>
          <th>Donor name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Blood type</th>
          <th>Storage Location</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>1</td>
          <td>whole blood</td>
          <td>A+ve</td>
          <td>Fridge1</td>
        
          <td>
        
         jhjhj
            
            </td>
        </tr>
      
      </tbody>
    </Table>
    </div>
          </div> 
    </>
  )
}

export default SearchDonor