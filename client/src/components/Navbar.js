import React from 'react';
import { Nav, Button, Navbar, NavItem } from 'react-bootstrap';

const OurNavbar = (props) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header className="navbarmain">
                <Navbar.Brand>
                    <h1></h1>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1}>
                        <Button onClick={() => props.handleOnClick("Login")}>Login</Button>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <Button onClick={() => props.handleOnClick("Signup")}>Signup</Button>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default OurNavbar;