import React from 'react'
import AdminNav from '../Navbar/AdminNav'

const ApprovedRequest = () => {
  return (
    <>
    <AdminNav/>
      <header>
        <h1>Approved Requests</h1>
    </header>
    <div class="container">
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>Request ID</th>
				<th>Product Name</th>
				<th>Blood Type</th>
				<th>Volume</th>
                <th>Request Status</th>
				<th>Patient ID</th>
				<th>Requested Date</th>
				<th>Required Date</th>
				<th>Status</th>
                <th>Assign Blood Bags</th>
				
			</tr>
		</thead>
		<tbody>
			<tr>
				<td> 1</td>
				<td>3</td>
				<td>whole blood</td>
				<td>A+ve</td>
				<td>450 ml</td>
                <td>Urgent</td>
				<td>1</td>
				<td>2023-8-8</td>
				<td>2023-8-8</td>
				<td>On-process</td>
                <td>Click</td>
			</tr>
			
		</tbody>
	</table>
</div>
    
    
    
    </>
  )
}

export default ApprovedRequest