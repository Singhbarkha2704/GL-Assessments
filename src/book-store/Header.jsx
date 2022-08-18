import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  
  return (
    
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">                    
                        {/* <Nav.Link as={Link} to="/">Home</Nav.Link>                    */}
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>                             
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    
  )
}

export default Header