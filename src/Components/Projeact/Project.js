import React from 'react';
import { Carousel } from 'react-bootstrap';

const Project = () => {
    return (
        <>
             <h2>Project</h2>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/image/slider1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-info'>Travalo</h3>
      
      <a href='https://traveleo-traveler-raihan.netlify.app/' className='btn btn-info'>Live site</a>
       
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/image/slider2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className='text-info'>Bike Club</h3>
      
     <a href='https://bicycle-4a9ef.web.app/' className='btn btn-info'>Live site</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/image/slider3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className='text-info'>Med Life</h3>
      
      <a href='https://fir-authentication-73a2b.web.app/' className='btn btn-info'>Live site</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Project;