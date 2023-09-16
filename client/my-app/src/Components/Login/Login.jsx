import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate()
  const [inputs, setinputs] = useState({});
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setinputs({...inputs,[name]:value});
    console.log(inputs);
  }
  const registersubmit =(e)=>{
    e.preventDefault();
 
    axios.post('http://localhost:5000/api/login',inputs).then((data)=>{
console.log(data);
if(data.data.userRole =='1'){
localStorage.setItem('name',data.data.userName);
localStorage.setItem('login_id',data.loginId);
localStorage.setItem('role',data.data.userRole);
localStorage.setItem('token',data.data.token);
navigate('/usermange');
}
else if(data.data.userRole =='2'){
  localStorage.setItem('name',data.data.userName);
localStorage.setItem('login_id',data.data.loginId);
localStorage.setItem('role',data.data.userRole);
localStorage.setItem('token',data.data.token);
navigate('/usermange');
}
console.log("Successfully login");
    })
    .catch((error)=>{
      console.log(error);
    })

  }
  return (
    <>
    <div className='login'>

    <div class="imgcontainer">
    
      <img src="img/user.jpg" width={'100px'} height={'100px'}/>
    </div>
  
    <div class="logincontainer">
      <div className='formgroup mb-2'>
      <label for="uname"><b>Username:</b></label>&nbsp;&nbsp;
      <input type="text" placeholder="Enter Username" name="username" required onChange={setRegister} /><br/>
</div>
<div className='formgroup mb-2'>
      <label for="psw"><b>Password:</b></label>&nbsp;&nbsp;
      <input type="password" placeholder="Enter Password" name="password" required onChange={setRegister} /><br/>
      </div>
      <div className='formgroup mb-2'>
      <button type="submit" class="btn btn-primary btn-rounded w-50 d-flex justify-content-center " onClick={registersubmit}>Login</button><br/>&nbsp;&nbsp;
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
      </div>
    </div>
    </div>
   
    </>
  )
}

export default Login