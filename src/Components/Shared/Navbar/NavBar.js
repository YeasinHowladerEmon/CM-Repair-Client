import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import smart from '../../../images/smartphone.png'
const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand href="/home">
                    <img style={{width: "10%"}} src={smart} alt=""/>
                    CM REPAIR
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
                    <Nav className="">
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