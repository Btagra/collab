import React, { Component } from 'react';
import fire from '../config/Fire';
import { Nav, NavItem, Button, Navbar, Media, Grid, Row, Col, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import API from '../utils/API';
import './Home.css';
import Icon from "../components/chat/Message-Icon/index";
class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    state = {
        uid: '',
        profiles: null,
        show: false,
        bmFirstName: '',
        bmLastName: '',
        bmbio: '',
        bmimage: ''

    };

    logout() {
        fire.auth().signOut();
    }

    componentDidMount() {
        const uid = localStorage.getItem("uid");
        this.fetchNotes(uid);
        this.fetchMatch(uid);
    }

    componentDidUpdate(prevProps, prevState) {

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
            });
    }

    fetchMatch = (uid) => {
        API.getMatch(uid)
            .then(res => {
                console.log('this is my best match', res.data)
                this.setState({ bmFirstName: res.data.name, bmLastName: res.data.lastName, bmbio: res.data.bio, bmimage: res.data.image })

            });
    }

    compare = () => {
        const uid = localStorage.getItem("uid");
        this.handleShow();
        this.fetchMatch(uid);
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        let bestMatch = ''

        if (this.state.bmFirstName.length > 0) {
            bestMatch = (
                <div>
                    <img width={200} height={"auto"} src={this.state.bmimage} alt="no image" />
                    <h3> This is our best match!</h3>
                    <h3> FullName: {this.state.bmFirstName} {this.state.bmLastName}</h3>
                    <h3> Bio: {this.state.bmbio}</h3>
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
                            <NavItem >
                                <Icon/>
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
                                        alt="Profile" />
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
                                        <h2>Portfolio:</h2>
                                        <ListGroup>
                                            <a href={this.state.profiles.portfolios}>{this.state.profiles.portfolios}</a>
                                        </ListGroup>
                                    </Media.Body>
                                </Col>
                            </Media>
                        </Row>
                    </Grid>)}
                <Modal show={this.state.show} onHide={this.handleClose}>

                    <Modal.Header>
                        <Row className="show-grid">
                            <Col xs={9} md={8}>
                                <Modal.Title>Collab</Modal.Title>
                            </Col>
                            <Col xsHidden md={2}></Col>
                            <Col xs={2} md={2}>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Col>
                        </Row>
                    </Modal.Header>

                    <Modal.Body>
                        {bestMatch}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Home;