import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const UserRegistration = () => {



const[input,setInput]=useState({
name:'',
uname:'',
pwd:'',
cpwd:'',
email:'',
loc:'',
mobile:'',
empid:'',
gender:'',
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
    axios.post('http://localhost:5000/api/register',input).then((response)=>{
      toast.success("Registration completed successfully..")
      // navigate('/userview')
      
    })
    .catch((error)=>{
     console.log(error);
    });

  }
  return (
   <>
      
   <div className='regcontainer' >
   <ToastContainer />
    <h1 >Register Now</h1><br/>
    <form>
    <div className="row centered-form">

	<div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm" name="name" onChange={setRegister}placeholder="Name"/>
	</div>
	
	<div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm" name="username"  onChange={setRegister}  placeholder="UserName"/>
	</div>

<div className="form-group mb-4">
	
	 <input type="password"  id="first_name" class="form-control input-sm" name="password"  onChange={setRegister} placeholder="Password"/>
	</div>
 
    <div className="form-group mb-4 ">
	
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{color:'white'}} >Gender</FormLabel>
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
   </div>


    <div className="form-group mb-4">
	
<input type="password"  class="form-control input-sm" name="cpwd" onChange={setRegister} placeholder="Conform Password"/>
	</div>
	
    <div className="form-group mb-4">
	
<input type="text"  class="form-control input-sm" name="empid" onChange={setRegister} placeholder="Emp ID"/>
	</div>

<div className="form-group mb-4">
	 <input type="email"   class="form-control input-sm" name="email" onChange={setRegister} placeholder="Email"/>
	</div>
  
	<div className="form-group mb-4">
<input type="Number" id="last_name" class="form-control input-sm" name="phone" onChange={setRegister} placeholder="Phone"/>
	</div>
    <div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm"  name="jobtitle" onChange={setRegister}placeholder="Jobtitle"/>
	</div>	
    <div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm"  name="location" onChange={setRegister}placeholder="Location"/>
	</div>	
    <div className="forn-group md-4">
    <button type="submit" class="btn btn-rounded  d-flex justify-content-center regbtn" onClick={registersubmit}>Register</button>
    </div>
</div>

    </form>
   </div>
   

   
   
   </>
  )
}

export default UserRegistration