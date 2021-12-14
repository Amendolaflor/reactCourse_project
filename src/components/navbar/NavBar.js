import React from "react";
import logotipo from "../../assets/imgs/logo3.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import CartWidget from "../cartwidget/CartWidget";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar className="nav" collapseOnSelect expand="lg" variant="dark">
      <LinkContainer to="/">
        <Nav.Link>
          {" "}
          <img className="logo" src={logotipo} alt="react logo" />      
        </Nav.Link>
      </LinkContainer>
        <Navbar.Brand>NUTRISHOP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <LinkContainer to="/products/1">
              <NavDropdown.Item>Viandas</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/products/2">
              <NavDropdown.Item>Dulces</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/products/3">
              <NavDropdown.Item>Nutri</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/products/4">
              <NavDropdown.Item>Celiacos</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/checkout">
              <NavDropdown.Item to="/checkout">Ir al pago</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavLink exact to="/">
            <CartWidget />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;

