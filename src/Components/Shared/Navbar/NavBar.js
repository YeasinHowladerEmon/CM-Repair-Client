import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;