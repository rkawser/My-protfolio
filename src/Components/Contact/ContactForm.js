import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'
import { ImLocation2 } from "react-icons/im";
import {MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";



function ContactForm() {
  const [state, handleSubmit] = useForm("mpzbajry");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <Container>
      <h1 className='my-5 animate-charcter'>Contact Me</h1>
      <Row className='contact-style'>
        <Col md={5}>
          <div className='contact-text'>
            <h2>Get In Touch</h2>
            <h4 className='mt-5 mb-4'>For all enquiries, please contact me for further information.</h4>
          </div>
          <div>
            <h5 className='my-3'><ImLocation2 className='me-3 text-info'/> Pabna,Rajshahi,Bangladesh</h5>
            <h5 className='my-3'><MdOutlineMail className='me-3 text-info'/> raihankawser55@gmail.com</h5>
            <h5><FiPhoneCall className='me-3 text-info'/> 01729573536</h5>
          </div>
        </Col>

        <Col md={7}>
        <form className='contact-form my-5' onSubmit={handleSubmit}>
      <label htmlFor="email">
     <h3>Contact Form</h3>
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Description'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn btn-info' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
        </Col>
      </Row>
    </Container>
    
    </>
      
  );
}

function App() {
  return (
    <ContactForm/>
  );
}
export default App;
