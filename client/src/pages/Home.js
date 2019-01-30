import React, { Component } from 'react';
import fire from '../config/Fire';
import { Nav, NavItem, Button, Navbar, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../utils/API';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    state = {
        uid: '',
        profiles: null
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
                console.log(res.data[0].profiles[0]);
                const profiles = res.data[0].profiles[0];
                if (profiles !== 0) {
                    this.setState({
                        profiles
                    });
                }
                console.log("state after profiles came back!", this.state);
            });
    }

    render() {
        return (
            <>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {this.state.profiles && <h1>{this.state.profiles.firstName} {this.state.profiles.lastName}</h1>}
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
                {this.state.profiles && (
                    <Grid>
                        <h1>Bio: </h1>{this.state.profiles.bio}
                        <h2>Instruments:</h2>
                        <ListGroup>
                            {this.state.profiles.instruments.map((instrument, i) => <li key={i}>{instrument}</li>)}
                        </ListGroup>
                    </Grid>)}

                    
            </>
        );
    }
}

export default Home;