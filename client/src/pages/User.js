import React, { Component } from 'react';
import fire from '../config/Fire';
import Login from './Login';
import Home from './Home';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }

    }

    componentDidMount() {
        this.authListener();
    }

    componentWillUnmount() {
        this.authListener();
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            console.log(user);

            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }
    render() {
        return (
            <div className="App">
                {this.state.user ? (<Home />) : (<Login />)}
            </div>
        );
    }
}

export default User;
