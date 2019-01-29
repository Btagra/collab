import React, { Component } from 'react';
import fire from '../config/Fire';
import { Nav, NavItem, Button, Navbar } from 'react-bootstrap';
import API from '../utils/API';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    state = {
        uid: '',
        profiles: []
    };

    logout() {
        fire.auth().signOut();
    }

    componentDidMount() {
        const uid = localStorage.getItem("uid");
        this.fetchNotes(uid);
    }

    fetchNotes = (uid) => {
        API.getUser(uid)
            .then(res => {
                console.log(res.data[0].profiles);
                // const profiles = res.data;
                // if (profiles !== 0) {
                //     this.setState({
                //         profiles
                //     });
                // }
                // console.log("state after profiles came back!", this.state);
            });
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