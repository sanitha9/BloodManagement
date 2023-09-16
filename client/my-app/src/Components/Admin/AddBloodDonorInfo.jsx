import React, { useState } from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AddBloodDonorInfo = () => {
  const[input,setInput]=useState({
    donorID:'',
    civilid:'',
    fullname:'',
    occupation:'',
    nationality:'',
    phone:'',
    gender:'',
    bloodgroup:'',
    address:'',
    donorconsent:'',
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
        axios.post('http://localhost:5000/api/add/add-blooddonor',input).then((response)=>{
          toast.success("Blood donor is added successfully..")
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
    <ToastContainer/>
    <form className='adddonor'>
  <div class="mb-1">
    <label for="exampleInputEmail1" class="form-label">Donor ID</label>
    <input type="text" class="form-control" name="donorID" aria-describedby="emailHelp" onChange={setRegister}/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Civil ID</label>
    <input type="text" class="form-control" name="civilid" onChange={setRegister}/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Full Name</label>
    <input type="text" class="form-control" name="fullname" onChange={setRegister}/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Occupation</label>
    <input type="text" class="form-control" name="occupation" onChange={setRegister}/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Nationality</label>
    <input type="text" class="form-control" name="nationality" onChange={setRegister}/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Phone</label>
    <input type="Number" class="form-control" name="phone" onChange={setRegister}/>
  </div>
 
  <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label " style={{color:'Black'}}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender" onChange={setRegister}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
     
      </RadioGroup>
    </FormControl>
    <div class="mb-1">
        <label for="exampleInputPassword1" class="form-label">Blood Group:</label>
        <select class="form-control" name="bloodgroup" onChange={setRegister} value={input.bloodgroup}>
  <option value="">select</option>
  <option value="A+ve">A+ve</option>
  <option value="B-ve">B-ve</option>
  <option value="O+ve">O+ve</option>
  <option value="B+ve">B+ve</option>
</select>
      </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" name="address" onChange={setRegister}/>
  </div>
  
  <div class="mb-4">
    <label for="exampleInputPassword1" class="form-label">Donor Consent</label>
    <input type="file" class="form-control" name="donorconsent" onChange={setRegister}/>
  </div>

  <div class="row  justify-content-center ">
  <div class="col-md-2 mx-2 ">
    <button type="submit" class="btn btn-primary" onClick={registersubmit}>Submit</button>
  </div>
  <div class="col-md-2 mx-2">
    <button type="reset" class="btn btn-primary" onClick={resetForm}>Clear</button>
  </div>
</div>

</form>
    
    
    </>
  )
}

export default AddBloodDonorInfo