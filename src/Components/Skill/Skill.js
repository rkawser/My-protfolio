import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skill.css'
const Skill = () => {
    return (
        <div className='my-5'>
            <Container>
             <h2 className='skill-text'> <span className='color-set'>My S</span>kills</h2>
            </Container>

           <div className='my-5'>
           <Container>
           <Row xs={1} md={4} className="g-4">
                   <Col md={3}>
                       <div className='skill-card'>
                           <img src='/image/html.ec102b63.png' className='img-fluid w-50' alt=''/>
                           <p>HTML</p>
                       </div>
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/css.29013fe6.png' className='img-fluid w-50' alt=''/>
                           <p>CSS</p>
                       </div>
                    </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/bootstrap.bab10aaa.png' className='img-fluid w-50' alt=''/>
                           <p>BOOTSTRAP</p>
                       </div>
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/jfl3k09hkiz0urmuq1pspdueq1yotbc5.png' className='img-fluid w-50' alt=''/>
                           <p>JAVASCRIPT</p>
                       </div> 
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/react.35639ed9.png' className='img-fluid w-50' alt=''/>
                           <p>REACT</p>
                       </div>
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/material.jpg.png' className='img-fluid w-50' alt=''/>
                           <p>MATERIAL</p>
                       </div>
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/tailwaind.4025b9f6.png' className='img-fluid w-50' alt=''/>
                           <p>TAILWAIND</p>
                       </div>
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/mongodb.70c82e5a.png' className='img-fluid w-50' alt=''/>
                           <p>MONGODB</p>
                       </div>
                   </Col>

                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/express.483b10d6.png' className='img-fluid w-50' alt=''/>
                           <p>EXORESS</p>
                       </div>
                   </Col>

                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/node.jpg.png' className='img-fluid w-50' alt=''/>
                           <p>NODE</p>
                       </div>
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/github.caeb9ff8.png' className='img-fluid w-50' alt=''/>
                           <p>GITHUB</p>
                       </div>
                   </Col>
                   <Col md={3}>
                   <div className='skill-card'>
                           <img src='/image/firebase.bff5748e.png' className='img-fluid w-50' alt=''/>
                           <p>FIREBASE</p>
                       </div>
                   </Col>
               </Row>
           </Container>
           </div>
          
        </div>
    );
};

export default Skill;