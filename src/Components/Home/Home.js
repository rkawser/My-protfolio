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
import { BsFacebook,BsGithub } from "react-icons/bs";
import { SiLinkedin} from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
    return (
        <>
          <Container fluid>
              <Row className='home-style'>
                  <Col md={6}>
                    <div className='home-text'>
                    <h2>Md.Raihan Kawser</h2>
                    <span >
          <Typewriter
            words={['I am a Front End Developer', 'I am a self believer']}
            loop={20}
            cursor
            cursorStyle='❤️'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
                     <h4>
                       <a href='https://www.facebook.com/raihan.kawsar.9'>
                       <BsFacebook className='mx-2 link-style'/> 
                       </a>
                      <a href='https://www.linkedin.com/in/raihan-kawser/'>
                      <SiLinkedin className='mx-2 link-style'/>
                      </a>
                      <a href='https://github.com/rkawser'>
                      <BsGithub className='mx-2 link-style'/>  
                      </a>
                                        
                     </h4>
                    <Link to='/about'>
                    <button className='btn btn-info'>ABOUT ME</button>
                    </Link> 
                  </div>
                  </Col>
                  
                  <Col md={6}>
                  <div>
                      <img src='/image/banner1.png.png' className='img-fluid w-50 banner-img rounded-circle shadow' alt=''/>
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