import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skill from '../Skill/Skill';
import './About.css'

const About = () => {
    return (
        <div className='my-5'>
            <Container>
            <Row className='about-style'>
                <Col md={6}>
                    <div className='about-img'>
                        <img src='/image/2.png' className='img-fluid' alt='' />
                    </div>
                </Col>

                <Col md={6}>
                    <div>
                        <h2>Front-end Develover</h2>
                         <h4>A Passionate web  Designer <br/> and Web Developer</h4>
                        
                         <h5>I'm Raihan kawser</h5>
                         <h6> I am a frontend web developer with solid knowledge in different technologies & enough experience in creating & designing super responsive websites.Also have a good experienced in creating modern React applications.Constantly learning new things</h6>
                         <a href='https://www.linkedin.com/in/raihan-kawser/'> 
                         <button  className='btn btn-info'>More Info </button>
                         </a>
                    </div>
                    </Col>
            </Row>
            </Container>
            
            <div>
                <Skill></Skill>
            </div>
        </div>
    );
};

export default About;