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
        profiles: null
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
                //console.log('this is my best match', res)
                //console.log(res.data[0].profiles[0]);
               const profiles = res.data[0].profiles[0];
                if (profiles !== 0) {
                    this.setState({
                        profiles
                    });
                }
                console.log("state after profiles came back!", this.state);
            });
    }

    fetchMatch = (uid) => {
        
        API.getMatch(uid)
            .then(res => {
                console.log('this is my best match', res.data)
                console.log("state after profiles came back!", this.state);
            });
 
    } 
    compare = () => {
        const { history } = this.props;
        history.push('/compare')
    }

    render() {
        console.log('these are our props', this.props)
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
                        <Row>
                            <Media>
                                <Col xs={6} md={4}>
                                    <img width={300}
                                        height={300}
                                        className="mr-3"
                                        src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                        alt="Generic placeholder" />
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
                        <button onClick={this.compare}>Compare page!!!!</button>
                    </Grid>)}
            </>
        );
    }
}

export default Home;