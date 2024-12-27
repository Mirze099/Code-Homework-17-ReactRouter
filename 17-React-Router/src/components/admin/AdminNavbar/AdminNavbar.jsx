import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function AdminNavbar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">Mirze/Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto nav-links">
                            <Nav.Link color='white'><NavLink to="/admin">Admin</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="books">Books</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="addbook">Add-Books</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="editbook">Edit-Books</NavLink></Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="nav-right">
                        <InputGroup size="sm" className="mb-3">
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        <Button variant="warning">Sort by Price</Button>
                        <div className="icons">
                            <NavLink to="/favorites"><FontAwesomeIcon icon={faHeart} size="1x" /></NavLink>
                            <NavLink to="/basket"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                        </div>
                    </div>
                </Container>
            </Navbar >
        </div>
    )
}

export default AdminNavbar