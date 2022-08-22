import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux-store/AuthSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  // const auth = useAuth();

  const logoutHandler = () => {
    dispatch(authActions.logout())
  };
  
  return (
      
    
        <Navbar bg="dark" variant="dark" sticky='top'>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">                    
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link>   */}
            {isAuth && <>
            <Nav.Link as={Link} to="/landing-page">landing</Nav.Link>
            <Nav.Link as={Link} to='/' className='btn btn-danger btn-lg text-white' onClick={logoutHandler}>Logout</Nav.Link>
            </>}
            
          </Nav>
          
            </Navbar.Collapse>
            </Container>
        </Navbar>
    
  )
}

export default Header