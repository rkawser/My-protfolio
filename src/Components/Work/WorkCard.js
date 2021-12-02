import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './WorkCard.css'
const WorkCard = ({projects}) => {
    const{name,img,description,id,link}=projects
    return (
        <Col>
      <Card className='work-card'>
        <Card.Img variant="top" src={img} className='img-fluid '/>
        <Card.Body className='work-body'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
      <div className='card-link'>
      <Link to={`/project/${id}`}>
        <button className='btn btn-info m-2'>Details</button>
        </Link>
        <a href={link}>
        <button  className='btn btn-info m-2'>life site</button>
        </a>
      </div>
        </Card.Body>    
      </Card>
    </Col>
    );
};

export default WorkCard;