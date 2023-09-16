import React from 'react'
import AdminNav from '../Navbar/AdminNav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EditIcon from '@mui/icons-material/Edit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import IconButton from '@mui/material/IconButton';
const ListBloodProduct = () => {
  return (
  <>
  <AdminNav/>
  <h1>Blood Products</h1>
  <Form inline className='d-flex justify-content-center mb-5'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Donor ID</th>
          <th>Unit No</th>
          <th>Product Name</th>
          <th>Blood type</th>
          <th>Storage Location</th>
          <th>Volume</th>
          <th>Unit creation date</th>
          <th>Expiry Date</th>
          <th>Status </th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>1</td>
          <td>whole blood</td>
          <td>A+ve</td>
          <td>Fridge1</td>
          <td>450ml</td>
          <td>2020-18-05</td>
          <td>2021-18-02</td> 
          <td>available</td>
          <td>abrahospital</td>
          <td>
            <button>
          <IconButton>
          <EditIcon/>
  </IconButton>
  </button>  
            <button> 
          <IconButton>
          <EditIcon/>
  </IconButton>
   </button>
            
            </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  
  </>
  )
}

export default ListBloodProduct