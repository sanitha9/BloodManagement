import React, { useEffect, useState } from 'react'
import AdminNav from '../Navbar/AdminNav'
import AdminFooter from '../Footer/AdminFooter'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListDonorActivity = () => {
const [donoract,setDonorAct] = useState([]);

  useEffect(()=>{
   fetch(`http://localhost:5000/api/donoractivity/view-donoractivity`)
    .then(response=>response.json())
    .then(data=>{
      console.log(data.data);
      setDonorAct(data.data)}
    )
    .catch(error=>console.error("Error fetching donor activity: ",error));

  },[]);
  let serialNumber = 1;
  return (
    <>
    <AdminNav/>
 
    <h3 className='d-flex justify-content-center mb-5'>Donor Activity Informations </h3>
 
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
    <Table striped bordered hover className="table-sm " >
      <thead>
        <tr>
          <th>slno</th>
          <th>Donor ID</th>
          <th>Date of Donation</th>
          <th>Donor Status</th>
          <th>Place of Donation</th>
          <th>Type of Donation</th>
         
          <th>Temperature</th>
          <th>Weight</th>
          <th>Height</th>
          <th>Action</th>
        </tr>
      </thead>
   
      
      <tbody>
      {donoract.map((activity)=>(
        <tr key={activity._id}>
           <td>{serialNumber++}</td>
          <td>{activity.donorid}</td>
          <td>{activity.dateofdonation}</td>
          <td>{activity.donorstatus}</td>
          <td>{activity.placeofdonation}</td>
          <td>{activity.typeofdonation}</td>
         
          <td>{activity.temperature}</td>
          <td>{activity.weight}</td>
          <td>{activity.height}</td>
         
          <td>
            <button > Deletete </button>
            
            <button style={{marginLeft:"5px"}}> Update      </button>
            
            </td>
        </tr>
     ))}
    
      </tbody>
     
    </Table>
   

   <AdminFooter/>
    </>
  )
}

export default ListDonorActivity