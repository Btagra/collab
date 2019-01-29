import React, { Component } from 'react';

// import './style.css';
import Form from '../Chat-Form/index';
import firebase from 'firebase';
import fire from '../../config/Fire';
// firebase.initializeApp(firebaseConfig);

class AppChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
        }
    }
    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            console.log(user)
        });
    }

    render() {
        return (
            <div className="app-chat">
                <div className="app__list">
                    <Form user={this.props.userName} />
                </div>
            </div>
        );
    }
}
export default AppChat;