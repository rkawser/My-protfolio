import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Raihan kawser</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
        <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
        <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
        <Nav.Link as={Link} to='/contact'>Contact Me</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
        <a className=' btn btn-info'
 href="https://drive.google.com/file/d/13e-t2VDWrhkBhB3k3_hbQLIlNOx6rZs8/view?usp=sharing"
              download="proposed_file_name"
            >
              Resume
            </a>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;