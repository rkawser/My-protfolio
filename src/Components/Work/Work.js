import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './Work.css';
import WorkCard from './WorkCard';
const Work = () => {
const [project,setProject]=useState([])

    useEffect(()=>{
        fetch('/Fake.json')
        .then(res=>res.json())
        .then(data=>setProject(data));
    },[])

    return (

       <Container className='mb-5'>
            <div className='my-5'>
            <h2 className='work-text'>Some of <span className='work-border'>my works</span></h2>
            </div>
            <Container>
            <Row xs={1} md={2} className="g-5">
                {
                    project.map(data=><WorkCard key={data.id} projects={data}></WorkCard>)
                }
                </Row>
            </Container>
       </Container>
    );
};

export default Work;