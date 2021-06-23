import React from 'react';
import logotipo from '../../assets/imgs/logotipo2.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css'; 
import CartWidget from '../cartwidget/CartWidget'


function NavBar() {
  return (
    <Navbar className = "nav" collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home"> <img className="logo" src={logotipo} alt="react logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/products/3.1">Ropa Mujer</NavDropdown.Item>
        <NavDropdown.Item href="/products/3.2">Ropa hombre</NavDropdown.Item>
        <NavDropdown.Item href="/products/3.3">Bijouterie</NavDropdown.Item>
        <NavDropdown.Item href="/products/3.4">Electronica</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/checkout/3.5">Ir al pago</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><CartWidget /></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
  );
}

export default NavBar;
/* <div className="App">
      <Navbar bg="blueNav" variant="dark">
        <Navbar.Brand>
          <img className="logo" src={logo} alt="react logo" /> Easy Shopping
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="products">Products</Nav.Link>
          <Nav.Link href="about">About us</Nav.Link>
          <Nav.Link href="contact">Contact us</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar>
    </div> */