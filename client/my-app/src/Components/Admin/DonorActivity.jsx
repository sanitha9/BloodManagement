import React, { useState } from 'react'
import AdminNav from '../Navbar/AdminNav';
import AdminFooter from '../Footer/AdminFooter';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const DonorActivity = () => {



  const[input,setInput]=useState({
 
    })
    
    const setRegister = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
        console.log(input);
      };
      const registersubmit =(event)=>{
        event.preventDefault();
        console.log("data",input);
        axios.post('http://localhost:5000/api/donoractivity/add-donoractivity',input).then((response)=>{
          toast.success("Blood donor activity is added successfully..")
          // navigate('/userview')
          
        })
        .catch((error)=>{
         console.log(error);
        });
    
      }
      
      const resetForm = () => {
        setInput(
          "");
      };
  return (
    <>
    <AdminNav/>
   <ToastContainer/>
    <h3 className='d-flex justify-content-center mb-5'>Donor Activity</h3>
  
    <div className='cont'>
    <div className='doactivity'>
 
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Donor Id
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="donorId" name="donorid" onChange={setRegister}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Date of Donation
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="date" placeholder="Date of donation" name="dateofdonation" onChange={setRegister} />
        </Col>
      </Form.Group>
      {/* <fieldset>
        <Form.Group as={Row} className="mb-4" name="donorstatus">
          <Form.Label as="legend" column sm={0}>
           Donor Status
          </Form.Label>
          <div className='radio'>
          <Row>
          <Col sm={0} className='colr' >
            <Form.Check
              type="radio"
              label="Accepted"
              // name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="Accepted"
              onChange={setRegister}
              checked={donorstatus === "Accepted"}
            />
            </Col>
            <Col sm={0} className='colr'>
            <Form.Check
              type="radio"
              label="Rejected"
              // name="formHorizontalRadios"
              id="formHorizontalRadios2"
              value="Rejected"
              onChange={setRegister}
              checked={donorstatus === "Rejected"}
            /></Col>
            <Col sm={0} className='colr'>
            <Form.Check
              type="radio"
              label="Regular"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            /></Col>
              <Col sm={0} className='colr'>
             <Form.Check
              type="radio"
              label="First Time"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            /></Col>
           
          </Row>
          </div>
        </Form.Group>
      </fieldset> */}
         <fieldset>
              <Form.Group as={Row} className="mb-4">
                <Form.Label as="legend" column sm={0}>
                  Donor Status
                </Form.Label>
                <div className="radio">
                  <Row>
                    <Col sm={0} className="colr">
                      <Form.Check
                        type="radio"
                        label="Accepted"
                        name="donorstatus"
                        id="formHorizontalRadios1"
                        value="Accepted"
                        onChange={setRegister}
                        checked={input.donorstatus === 'Accepted'}
                      />
                    </Col>
                    <Col sm={0} className="colr">
                      <Form.Check
                        type="radio"
                        label="Rejected"
                        name="donorstatus"
                        id="formHorizontalRadios2"
                        value="Rejected"
                        onChange={setRegister}
                        checked={input.donorstatus === 'Rejected'}
                      />
                    </Col>
                    <Col sm={0} className="colr">
                      <Form.Check
                        type="radio"
                        label="Regular"
                        name="donorstatus"
                        id="formHorizontalRadios3"
                        value="Regular"
                        onChange={setRegister}
                        checked={input.donorstatus === 'Regular'}
                      />
                    </Col>
                    <Col sm={0} className="colr">
                      <Form.Check
                        type="radio"
                        label="First Time"
                        name="donorstatus"
                        id="formHorizontalRadios4"
                        value="First Time"
                        onChange={setRegister}
                        checked={input.donorstatus === 'First Time'}
                      />
                    </Col>
                  </Row>
                </div>
              </Form.Group>
            </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Place of Donation
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="place of donation" name="placeofdonation" onChange={setRegister} />
        </Col>
      </Form.Group>
      {/* <fieldset>
        <Form.Group as={Row} className="mb-4">
          <Form.Label as="legend" column sm={0}>
          Type of Donation
          </Form.Label>
          <div className='radio'>
          <Row>
          <Col sm={0} className='colre' >
            <Form.Check
              type="radio"
              label="whole blood"
              // name="formHorizontalRadios"
              name="typeofdonation"
              id="formHorizontalRadios1"
              value
            />
            </Col>
            <Col sm={0} className='colre'>
            <Form.Check
              type="radio"
              label="Artherisis"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            /></Col>
           
          
           
          </Row>
          </div>
        </Form.Group>
      </fieldset> */}
      <fieldset>
  <Form.Group as={Row} className="mb-4">
    <Form.Label as="legend" column sm={0}>
      Type of Donation
    </Form.Label>
    <div className="radio">
      <Row>
        <Col sm={0} className="colre">
          <Form.Check
            type="radio"
            label="Whole Blood"
            name="typeofdonation"
            id="formHorizontalRadios1"
            value="Whole Blood" // Set the value you want to capture
            onChange={setRegister} // Call setRegister when the radio button is selected
            checked={input.typeofdonation === "Whole Blood"} // Check if it's selected
          />
        </Col>
        <Col sm={0} className="colre">
          <Form.Check
            type="radio"
            label="Artherisis"
            name="typeofdonation"
            id="formHorizontalRadios2"
            value="Artherisis" // Set the value you want to capture
            onChange={setRegister} // Call setRegister when the radio button is selected
            checked={input.typeofdonation === "Artherisis"} // Check if it's selected
          />
        </Col>
      </Row>
    </div>
  </Form.Group>
</fieldset>

  
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={0} style={{marginLeft:'155px',marginTop:'-40px',width:"750px"}} name="comments" onChange={setRegister} />
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Temperature
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name='temperature' onChange={setRegister}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
         weight
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="Number"  placeholder='kg' name='weight' onChange={setRegister}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-5" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
        height
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="Number" placeholder='cm' name='height' onChange={setRegister}/>
        </Col>
      </Form.Group>
 

      <Form.Group as={Row} className="mb-3">
        
        <Col sm={{ span: 50, offset: 2 }}>
          <Button type="submit" onClick={registersubmit}>Submit</Button>
        </Col>
        <Col sm={{ span: 50, offset: 2 }}>
          <Button type="Reset" style={{marginTop:'-70px',marginLeft:'100px'}} onClick={resetForm}>Clear</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
    </div>
    <AdminFooter/>
    
    </>
  )
}

export default DonorActivity