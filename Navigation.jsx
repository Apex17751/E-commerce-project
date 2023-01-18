import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar id='Nav' collapseOnSelect expand="lg" bg="light" variant="dark">
      <Navbar.Brand href="#" ><h2 className='nav-brand'>Skep<span>TICS</span></h2></Navbar.Brand>
      <Navbar.Toggle id='navbar-toggler' aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse bg='dark' id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">Services</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#login">About</Nav.Link>
          <Nav.Link href="#login">News</Nav.Link>
          <Nav.Link href="#login">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Navigation
