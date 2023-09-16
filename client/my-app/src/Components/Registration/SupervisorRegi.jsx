import React, { useState } from 'react'


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const SupervisorRegi = () => {
    

const[input,setInput]=useState({
    name:'',
    uname:'',
    pwd:'',
    cpwd:'',
    email:'',
    loc:'',
    mobile:'',
    empid:'',
    })
    
    const setRegister = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput({ ...input, [name]: value });
        console.log(input);
      };
    
  return (
   <>
  <div className='regcontainer' >
    <h1 >Register Now</h1><br/>
    <form>
    <div className="row centered-form">

	<div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm" name="name" onChange={setRegister}placeholder="Name"/>
	</div>
	
	<div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm" name="uname"  onChange={setRegister}  placeholder="UserName"/>
	</div>

<div className="form-group mb-4">
	
	 <input type="text"  id="first_name" class="form-control input-sm" name="pwd"  onChange={setRegister} placeholder="Password"/>
	</div>
 
    <div className="form-group mb-4 ">
	
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{color:'white'}}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
     
      </RadioGroup>
    </FormControl>
   </div>


    <div className="form-group mb-4">
	
<input type="text"  id="last_name" class="form-control input-sm" name="cpwd" onChange={setRegister} placeholder="Conform Password"/>
	</div>
	
    <div className="form-group mb-4">
	
<input type="text" id="last_name" class="form-control input-sm" name="empid" onChange={setRegister} placeholder="Emp ID"/>
	</div>

<div className="form-group mb-4">
	 <input type="text"  id="first_name" class="form-control input-sm" name="email" onChange={setRegister} placeholder="Email"/>
	</div>
  
	<div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm" name="phone" onChange={setRegister} placeholder="Phone"/>
	</div>
    <div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm"  name="jobtitle" onChange={setRegister}placeholder="Jobtitle"/>
	</div>	
    <div className="form-group mb-4">
<input type="text" id="last_name" class="form-control input-sm"  name="loc" onChange={setRegister}placeholder="Location"/>
	</div>	
    <div className="forn-group md-4">
    <button type="submit" class="btn btn-rounded  d-flex justify-content-center regbtn">Register</button>
    </div>
</div>

    </form>
   </div>
   
   
   
   
   
   
   
   
   </>
  )
}

export default SupervisorRegi