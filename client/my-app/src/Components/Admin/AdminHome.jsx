import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const AdminHome = () => {
  return (
    <>
    <div className='maindiv'>

  
    {/* <div className='outer-container'> */}

        <div className='msgcontainer'>
        
<p>Welcome Sanitha...</p>
<p>Department:Health care</p>
<p>EmpId:12344</p>
<p>Location:Malappuram</p>


        </div>


        <div className='notcontainer'>
<h2>Notifications<CircleNotificationsIcon/></h2>
<p>Some Blood bags Expired..Please check blood bag expired date..</p>

<p>There are Some Blood Request..</p>

        </div>
    {/* </div> */}
    
    </div>
    </>
  )
}

export default AdminHome