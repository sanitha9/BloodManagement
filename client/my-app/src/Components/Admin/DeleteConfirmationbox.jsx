import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const DeleteConfirmationbox = () => {
    const {id}=useParams();
const navigate = useNavigate()

function handleClick(event) {

    navigate('/donorinfo');
  }
    const deleteDonor = (event)=>{
        axios.delete(`http://localhost:5000/api/add/delete-donor/${id}`).then((response)=>{
            console.log("Deleted succesfully");
          toast.success("Blood donor is deleted successfully..",{
            position: toast.POSITION.TOP_CENTER,
            duration: 1000
        })
          
           navigate('/donorinfo')
          
        })
        .catch((error)=>{
         console.log(error);
        });
      
      }
  return (



    <>
    <div className='deleteb'>
    <Card style={{ width: '48rem' ,background:"yellow"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Confirmation</Card.Title>
        <Card.Text>
         Are you sure to remove this donor?
        </Card.Text>
        <Button variant="success"style={{marginLeft:'130px',height:'40px',width:'130px'}} onClick={deleteDonor}>Yes</Button>
        <Button variant="primary" style={{marginLeft:'230px',height:'40px',width:'130px'}} onClick={handleClick}>cancel</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default DeleteConfirmationbox