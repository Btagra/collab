import React, { Component } from 'react';
import fire from '../config/Fire';
import { Nav, NavItem, Button, Navbar } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h1>Collab</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Button onClick={this.logout}>Logout</Button>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           
        
        );
    }
}

export default Home;