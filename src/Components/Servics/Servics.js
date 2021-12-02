import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css'
const Servics = () => {
    return (

        <Container>
            <div className='my-5'>
            <h2 className='servics-text'>My <span className='servics-border'>Service</span></h2>
            </div>

            <Container className='my-5'>
            <Row xs={1} md={3} className="g-4">
                <Col md={4}>
                    <div className='service-card shadow'>
                        <img src='/image/webdesign.jpg.png' alt='' className='img-fluid w-25'/>
                        <h4 className='my-2 text-light'> Web Design</h4>
                        <h6 className='servics-text'>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design</h6>
                    </div>
                </Col>
                <Col md={4}>
                <div className='service-card shadow'>
                        <img src='/image/web-development.e943b1aa.png' alt='' className='img-fluid w-25'/>
                        <h4 className='my-2 text-light'> Web Development</h4>
                        <h6 className='servics-text'>Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</h6>
                    </div>
                </Col>
                <Col md={4}>
                <div className='service-card shadow'>
                        <img src='/image/code.2e0870f2.png' alt='' className='img-fluid w-25'/>
                        <h4 className='my-2 text-light'> Capture Code</h4>
                        <h6 className='servics-text'>The Code Capture tool allows you easily create screenshots of you LabVIEW code for use in documentation, web-sites, wikis, emails.for creating well a GUI for easy capturing and use of code</h6>
                    </div>
                </Col>
                <Col md={4}>
                <div className='service-card shadow'>
                        <img src='/image/responsive.png' alt='' className='img-fluid w-25'/>
                        <h4 className='my-2 text-light'> Responsive</h4>
                        <h6 className='servics-text'>Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, media queries.</h6>
                    </div>
                </Col>
                <Col md={4}>
                <div className='service-card shadow'>
                        <img src='/image/bug.c8ea6b59.png' alt='' className='img-fluid w-25'/>
                        <h4 className='my-2 text-light'>Bug Fixing</h4>
                        <h6 className='servics-text'>A bug fix is a change to a system or product designed to handle a programming bug/glitch. Many different types of programming bugs that create errors with system implementation may require specific bug fixes that are successfully resolved by a development or other IT team.</h6>
                    </div>
                </Col>
                <Col md={4}>
                <div className='service-card shadow'>
                        <img src='/image/mobile-app.145d9ce0.png' alt='' className='img-fluid w-25'/>
                        <h4 className='my-2 text-light'>Web App Development</h4>
                        <h6 className='servics-text'>Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. Client refers to a computer application such as a web browser.It's Amazing</h6>
                    </div>
                </Col>
            </Row>
            </Container>

        </Container>
        
    );
};

export default Servics;