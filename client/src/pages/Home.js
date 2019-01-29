import React, { Component } from 'react';
import fire from '../config/Fire';
import { Nav, NavItem, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                        <NavItem>
                            <Link to="/chat"><Button>Chat</Button></Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Home;