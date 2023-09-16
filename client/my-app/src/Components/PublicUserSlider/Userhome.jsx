import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
const Userhome = () => {
  return (
    <>
   

    <div>
        <img src='img/bg.jpg' height={'700px'} width={'700px'}/>
      
    
<div fluid className='userhomecontainer'>
    <h1 style={{marginLeft:'37px'}}>Donate Blood..</h1>
    <p>Save life...<br/>A single drop of blood can make a huge difference.</p>
</div>
<div className='events'>
 <h3>Events</h3>
 <p mb-3><u>Blood Donation Events</u></p>
 
 </div>
<div className='cardR1'>
<Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="img/event1.jpg" width={'300px'} />
      <Card.Body>
       
        <Card.Text>
        <div className="row1" style={{width:"26rem",height:"4rem",padding:"0px"}}>
          <img src='img/calender.jpg 'width={'50px'}/>17-8-2023
          </div>
        <div className="row1" style={{width:"13rem",marginTop:"-65px",marginLeft:"200px"}}>
        <img src='img/location.jpg 'width={'50px'}/>Malappuram
          </div>
   
       
   
        </Card.Text>
       
      </Card.Body>
    </Card>
</div>
<div className='cardR2'>
<Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="img/event2.jpeg" width={'300px'} />
      <Card.Body>
        
        <Card.Text>
        <div className="row1" style={{width:"26rem",height:"4rem",padding:"0px"}}>
          <img src='img/calender.jpg 'width={'50px'}/>17-8-2023
          </div>
        <div className="row1" style={{width:"26rem",marginTop:"-65px",marginLeft:"200px"}}>
        <img src='img/location.jpg 'width={'50px'}/>Malappuram
          </div>
        </Card.Text>
       
      </Card.Body>
    </Card>
</div>
<div className='cardR3'>
<Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src="img/event3.jpg" width={'300px'} />
      <Card.Body>
        
        <Card.Text>
         <div className="row1" style={{width:"26rem",height:"4rem",padding:"0px"}}>
          <img src='img/calender.jpg 'width={'50px'}/>17-8-2023
          </div>
        <div className="row1" style={{width:"13rem",marginTop:"-65px",marginLeft:"200px"}}>
        <img src='img/location.jpg 'width={'50px'}/>Malappuram
          </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
</div>

    </div>
    
    
    </>
  )
}

export default Userhome