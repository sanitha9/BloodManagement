import React, { useEffect, useState } from 'react'
import AdminNav from '../Navbar/AdminNav'
import AdminFooter from '../Footer/AdminFooter'
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';

import Tooltip from '@mui/material/Tooltip'; // or wherever Tooltip is defined
import IconButton from '@mui/material/IconButton'; // or wherever IconButton is defined
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// Other import statements and component definitions

const DonorInfoList = () => {
  const [donorinfo, setDonorInfo] = useState([]);
  // useEffect(()=>{
  // console.log("helooo");
  // },[])



  useEffect(() => {
    axios
      .get('http://localhost:5000/api/add/view-donorinfo')
      .then((response) => {
        setDonorInfo(response.data.data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);





  return (
    <>
      <AdminNav />

<ToastContainer/>
      <h2 className='d-flex justify-content-center'>Donors Informations</h2>

      <table class="table table-hover table-border containerdonor">

        <thead>
          <tr>  
            <th>Donor Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Civil Id</th>
          
            <th>Occupation</th>
            <th>Donorconsent</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {donorinfo.map((donor) => (
            <tr key={donor._id}>
               <td>{donor.donorID}</td>
              <td>{donor.fullname}</td>
              <td>{donor.phone}</td>
              <td>{donor.address}</td>
              <td>{donor.gender}</td>
              <td>{donor.bloodgroup}</td>
              <td>{donor.civilid}</td>
             
              <td>{donor.occupation}</td>
              <td>{donor.donorconsent}</td>
              < td>
                {/* <button> */}

                {/* </button> */}
                <Link to={`/editblooddonorinfo/${donor._id}`}> <button class="btn btn-primary">  
                  <Tooltip title="Edit">
                 
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                   
                </Tooltip></button> </Link>

                {/* onClick={()=>{
                    removeEvent(category._id);
                  }}> */}
                <Link to={`/deleteconfirmation/${donor._id}`} >    
                <button class="btn btn-warning">
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip></button></Link> 
              </td>
            </tr>
          ))}

        </tbody>
      </table>



      <AdminFooter />

    </>
  )
}

export default DonorInfoList