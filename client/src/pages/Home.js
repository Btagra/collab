import React, { Component } from 'react';
import fire from '../config/Fire';
import { Nav, NavItem, Button, Navbar, Media, Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../utils/API';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    state = {
        uid: '',
        profiles: null,
        bmFirstName: '',
        bmLastName: '',
        bmid: ''
    };

    logout() {
        fire.auth().signOut();
    }

    componentDidMount() {
        const uid = localStorage.getItem("uid");
        this.fetchNotes(uid);
        this.fetchMatch(uid)
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
                //console.log("state after profiles came back!", this.state);
            });
    }

    fetchMatch = (uid) => {
        API.getMatch(uid)
            .then(res => {
                console.log('this is my best match', res.data)
                this.setState({ bmFirstName: res.data.name, bmLastName: res.data.lastName, bmid: res.data.id })

            });
    }

    compare = () => {
        const { history } = this.props;
        history.push('/compare')
    }

    render() {
        let bestMatch = ''

        if (this.state.bmFirstName.length > 0) {
            bestMatch = (
                <div>
                    <h1> This is our best match!</h1>
                    <h1> FirstName: {this.state.bmFirstName}</h1>
                    <h1> Last Name: {this.state.bmLastName}</h1>
                    <h1> id: {this.state.bmid}</h1>
                </div>
            )
        }
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
                                <Button onClick={this.compare}>Compare page!!!!</Button>
                            </NavItem>
                            <NavItem eventKey={1}>
                                <Button onClick={this.logout}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.state.profiles && (
                    <Grid>
                        <Row>
                            <Media>
                                <Col xs={6} md={4}>
                                    <img width={300}
                                        height={"auto"}
                                        className="mr-3"
                                        src={this.state.profiles.image}
                                        alt="Profile Picture" />
                                </Col>
                                <Col xs={6} md={8}>
                                    <Media.Body>
                                        <h1>Bio: </h1>{this.state.profiles.bio}
                                        <h2>Instruments:</h2>
                                        <ListGroup>
                                            {this.state.profiles.instruments.map((instrument, i) => <li key={i}>{instrument}</li>)}
                                        </ListGroup>
                                        <h2>Genres:</h2>
                                        <ListGroup>
                                            {this.state.profiles.genres.map((genre, i) => <li key={i}>{genre}</li>)}
                                        </ListGroup>
                                        <h2>Portfolios:</h2>
                                        <ListGroup>
                                            {this.state.profiles.portfolios.map((portfolio, i) => <li key={i}>{portfolio}</li>)}
                                        </ListGroup>
                                    </Media.Body>
                                </Col>
                            </Media>
                        </Row>
                        {bestMatch}
                    </Grid>)}
            </>
        );
    }
}

export default Home;