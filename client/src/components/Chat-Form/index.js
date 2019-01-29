import React, { Component } from 'react';
import Message from '../Message/index';
import "./style.css";
// import fire from 'fire';
import fire from "../../config/Fire";
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Zhamal",
            message: '',
            list: [],
        };
        console.log(this.state.list + "This is our list");

        this.messageRef = fire.database().ref().child('messages');
        this.listenMessages();
        console.log(this.messageRef + "Reference");

    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps + "what is next props means");

        if (nextProps.user) {
            this.setState({ 'userName': nextProps.user.displayName });
        }
        console.log(nextProps.user + "Here is our nextProps");

    }
    handleChange(event) {
        this.setState({ message: event.target.value });
    }
    handleSend() {
        if (this.state.message) {
            var newItem = {
                userName: this.state.userName,
                message: this.state.message,
            }
            console.log(newItem + "this is our new item");

            this.messageRef.push(newItem);
            this.setState({ message: '' });
        }
    }
    handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        this.handleSend();
        console.log(event.key);

    }
    listenMessages() {
        this.messageRef
            .limitToLast(10)
            .on('value', message => {
                this.setState({
                    list: Object.values(message.val()),
                });
            });
    }
    render() {
        return (
            <div className="form">
                <div className="form__chatting">
                    {this.state.list.map((item, index) =>
                        <Message key={index} message={item} />


                    )}

                </div>
                <div className="form__row">
                    <input
                        className="input"
                        type="text"
                        placeholder=""
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    <button
                        className="button"
                        onClick={this.handleSend.bind(this)}
                    >
                        send
          </button>
                </div>
            </div>
        );
    }
}