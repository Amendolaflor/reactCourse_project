import React from 'react'
import logo from '../assets/images/logo.jpg';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';


function NavBar() {
  return (
    <div className="App">
      <Navbar bg="blueNav" variant="dark">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="react logo"/> Rick and Morty Cards  
        </Navbar.Brand>
        <Nav>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="about">About us</Nav.Link>
            <Nav.Link href="contact">Contact us</Nav.Link>
        </Nav>
        <CartWidget/>
      </Navbar>  
      
    </div>
  )
}

export default NavBar
