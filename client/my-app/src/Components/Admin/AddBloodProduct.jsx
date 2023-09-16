import React from 'react'
import AdminNav from '../Navbar/AdminNav'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const AddBloodProduct = () => {
  return (
   <>
    <AdminNav/>
   <h3 className='text-center'><i>Add blood Products</i></h3>
   <div className='bg-light container-sm'>
    <div className='reg-container '>
      
       
        <form className='form-reg container-sm' >
        <Row>
            <Col lg={6}>
        
        <div className='reg-group'>
          <label>Unit No</label>
          
          <input type='text' name='Book Name' />
        </div>
       
       
        <div className='reg-group'>
          <label>Product Name</label>
          <input type='text' name='Address'  />
        </div>
        <div className='reg-group'>
          <label>Storage Location</label>
          <input type='text' name='Phon no'   />        
          </div>
        </Col>
       
            <Col lg={6}>
        <div className='reg-group'>
          <label>Volume</label>
          <input type='text' name='Email' required />
        </div>
        <div className='reg-group'>
          <label>Blood Group</label>
          <input type='text' name='username'  />
        </div>
        <div className='reg-group'>
          <label>Unit creation Date</label>
          <input type='date' name='password'  />
        </div>
       
        </Col>
        <Col lg={6}>
      
        <div className='reg-group'>
          <label>Donor Id</label>
          <input type='text' name='username'  />
        </div>
        <div className='reg-group'>
          <label>Location</label>
          <input type='text' name='password'  />
        </div>
       
        </Col>
        <Col lg={6}>
       
        <div className='reg-group'>
          <label>Expiry Date</label>
          <input type='date' name='password'  />
        </div>
       
        </Col>
          </Row>
          <Row>
            <Col lg={6}>
              
          <button className="btn btn-success"style={{marginLeft:'300px'}}>Submit</button>
          <button className="btn btn-primary"style={{marginLeft:'100px'}}>Clear</button>
      </Col>
      </Row>
        </form>

    </div>
</div>
   
   </>
  )
}

export default AddBloodProduct