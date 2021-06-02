import logo from '../assets/images/logo.svg';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div className="App">
      <Navbar bg="blueNav" variant="dark">
        <Navbar.Brand>
          <img src={logo} alt="react logo"/> React  
        </Navbar.Brand>
        <Nav>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="about">About us</Nav.Link>
            <Nav.Link href="contact">Contact us</Nav.Link>
        </Nav>
      </Navbar>      
    </div>
  );
}

export default NavigationBar;