import React, { Component } from 'react';
import fire from '../config/Fire';
import { Nav, NavItem, Button, Navbar, Grid, ListGroup } from 'react-bootstrap';
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
                            <h1>{this.state.profiles.firstName} {this.state.profiles.lastName}</h1>
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
                <Grid>
                    <h1>Bio: </h1>{this.state.profiles.bio}
                    <h2>Instruments:</h2>{this.state.profiles.instruments}
                    {/* <ol> */}
                    {/* {this.state.profiles.instruments.map(profile => {

                        })} */}
                    {/* </ol> */}
                    {/* <ListGroup>
                        {this.state.profiles.instruments.map((instrument, i) => <ListGroup.Item key={i}>{instrument}</ListGroup.Item>)}
                    </ListGroup> */}
                </Grid>
            </>
        );
    }
}

export default Home;