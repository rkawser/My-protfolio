import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'
const Details = () => {
    const{details}=useParams();
    const[detail,setDetail]=useState([]);

    useEffect(()=>{
        fetch('/Fake.json')
        .then(res=>res.json())
        .then(data=>setDetail(data))
    },[])

    const found = detail?.find(data=>data?.id == details)
    return (
       <>
        <div>
            <Container>
                <Row className='details-style'>
                    <Col md={5}>
                    <div class="containers">
  <div class="carousel">
    <div className="carousel__face img-fluid">
        <span></span>
        <img  src={found?.img} alt=''/>
    </div>
    <div className="carousel__face img-fluid">
    <img  src={found?.img_a} alt=''/>
    </div>
    <div className="carousel__face img-fluid">
    <img  src={found?.img_b} alt=''/>
    </div>
    </div>
    </div>

  </Col>
   <Col md={7}>
       <div className='my-5'>
           <h1 className='detail-name'>{found?.name}</h1>
           <h6>{found?.description}</h6>
           <p><span className='tec-style'>Technology use:</span>{found?.tec}</p>
           <a href={found?.link_a}>
           <button className='btn btn-info'>Code Client site</button> <br/>
           </a>

           <a href={found?.link_b}>
           <button className='btn btn-info'>Code Server site</button> 
           </a>
       </div>
  </Col>
     </Row>
   </Container>
        </div>
       </>
    );
};

export default Details;