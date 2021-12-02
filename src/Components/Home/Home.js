import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import About from './../About/About';
import  ContactForm from '../Contact/ContactForm';
import Project from '../Projeact/Project';
import Skill from '../Skill/Skill';
import Servics from '../Servics/Servics';
import Work from '../Work/Work';
import { Link } from 'react-router-dom';
const Home = () => {
    
    return (
        <>
          <Container fluid>
              <Row className='home-style'>
                  <Col md={6}>
                    <div className='home-text'>
                    <h6>Hello I'm </h6>
                    <h2>Raihan Kawser</h2>
                    <h1>Front End Developer</h1>
                    <Link to='/about'>
                    <button className='btn btn-info'>ABOUT ME</button>
                    </Link>            
                  </div>
                  </Col>
                  
                  <Col md={6}>
                  <div>
                      <img src='/image/banner1.png.png' className='img-fluid w-50 bg-primary rounded-circle shadow' alt=''/>
                  </div>
                  </Col>
              </Row>
          </Container>
          
         <div>
          <Skill></Skill>
         </div>

         <div>
          <Servics></Servics>
         </div>

         <div>
           <Work></Work>
         </div>
        </>
    );
};

export default Home;