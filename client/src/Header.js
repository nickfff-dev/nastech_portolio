import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
} from "react-bootstrap";



class Header extends React.Component{
    render(){
      return (
          <Container className="mb-5">
          <Navbar
            collapseOnSelect
            expand="md"
          bg="none"
          variant="dark"
            className="mt-3 fixed-top"
            
        >
            <Container>
            <Navbar.Brand href="/">Nas_Tech</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link  >
                
                 Home
    
               
              </Nav.Link>
              <Nav.Link eventKey={2}>
            Portfolio
              </Nav.Link>
              <Nav.Link eventKey={2}>
            Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
            </Container>
          </Navbar>
          </Container>
            
        )
    }
}

export default Header;