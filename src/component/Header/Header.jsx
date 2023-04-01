import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <div>
            <Navbar  expand="lg">
      <Container fluid className='header'>
        <Navbar.Brand href="#">Open AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About US</Nav.Link>
            <Nav.Link href="#contract">Contract</Nav.Link>
            <img  width="30"
              height="30"
              className="d-inline-block align-top" src="/src/assets/icon.png" alt="" />
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;