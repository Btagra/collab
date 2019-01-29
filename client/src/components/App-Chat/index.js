import React, { Component } from 'react';

import './style.css';
import Form from '../Chat-Form/index';
// import firebase from 'firebase';

import fire from "../../config/Fire";

class AppChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }
    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });
    }
    handleSignIn() {
        const provider = new fire.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(provider);
    }
    handleLogOut() {
        fire.auth().signOut();
    }
    render() {
        return (
            <div className="app-chat">

                {!this.state.user ? (
                    <button
                        className="chat__button"
                        onClick={this.handleSignIn.bind(this)}
                    >
                        Sign in
            </button>
                ) : (
                        <button
                            className="chat__button"
                            onClick={this.handleLogOut.bind(this)}
                        >
                            Logout
            </button>
                    )}

                <div className="app__list">
                    <Form user={this.state.user} />
                </div>
            </div>
        );
    }
}

export default AppChat;