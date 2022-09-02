import React from 'react';
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand>
                <Link to='/'>NoteZipper</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Form className="m-auto">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
                
                <Nav className="me-auto">
                    <Nav.Link to='/mynotes'>
                        <Link to='/mynotes'>
                            My Notes
                        </Link>
                    </Nav.Link>
                    <NavDropdown title="Aj" id="basic-nav-dropdown">
                        <NavDropdown.Item >My Profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item >
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header;