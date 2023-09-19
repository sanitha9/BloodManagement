import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip'; // or wherever Tooltip is defined
import AdminNav from '../Navbar/AdminNav';
import IconButton from '@mui/material/IconButton'; // or wherever IconButton is defined
const CheckBloodBagsExpired = () => {
  return (
   <>
   
   <AdminNav/>
      <header>
        <h1>Blood Bags Expired</h1>
    </header>
    <div class="container">
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>Unit No</th>
				<th>Unit Creation Date</th>
				<th>Expiry Date</th>
				<th>Expired(No.days)</th>
                <th>Location</th>
				<th>Remove From Storage</th>
				
				
			</tr>
		</thead>
		<tbody>
			<tr>
				<td> 1</td>
				<td>3</td>
				
				<td>2019-3-14</td>
				<td>2019-3-14</td>
                <td>2</td>
				<td>Fridge 1</td>
				<td>
                {/* <Link to={`/deleteconfirmation/${donor._id}`} >     */}
                <button class="btn btn-warning" style={{marginLeft:"50px",background:"#6d85f0;"}}>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip></button>
				</td>
                {/* </Link>  */}
				
			</tr>
			
		</tbody>
	</table>
</div>
   
   
   
   </>
  )
}

export default CheckBloodBagsExpired