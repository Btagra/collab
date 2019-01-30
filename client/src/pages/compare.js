import React, { Component } from 'react';
import fire from '../config/Fire';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, NavItem, Button, Navbar, Media, Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from '../utils/API';
import './Home.css';

class Compare extends Component {
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
        this.fetchMatch(uid)
    }

    fetchMatch = (uid) => {
        API.getMatch(uid)
            .then(res => {
                console.log('this is my best match', res.data)
                //console.log(res.data[0].profiles[0]);
               /* const profiles = res.data[0].profiles[0];
                if (profiles !== 0) {
                    this.setState({
                        profiles
                    });
                }*/
                console.log("state after profiles came back!", this.state);
            });
 
    } 

    render() {
        return (
            <>
                <div> Compare page</div>
            </>
        );
    }
}

export default Compare;