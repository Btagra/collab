import React, { Component } from 'react';
import Message from '../Message/index';
// import "./style.css";
import { database } from "../../config/Fire";
import fire from "../../config/Fire";

export default class Form extends Component {
    state = {
        message: '',
        list: [],
    }

    componentDidMount() {
        this.listenMessages();

    }



    handleChange = (event) => {

        this.setState({ message: event.target.value });
    }
    handleSend = () => {
        if (this.state.message) {
            var newItem = {
                // uid: this.props.uid,
                message: this.state.message,
            }

            fire.push(newItem);
            this.setState({ message: '' });
        }
    }
    handleKeyPress = (event) => {
        if (event.key !== 'Enter') return;
        this.handleSend();

    }
    listenMessages = () => {
        database
            .limitToLast(10)
            .on('value', response => {
                const list = []
                for (let key in response.val()) {
                    console.log(response.val()[key])
                    list.push(response.val()[key].message)
                }
                this.setState({
                    list
                });
            });
    }
    render() {
        return (
            <div className="form">
                <div className="form__chatting">
                    {this.state.list.map((item, index) =>
                        <Message key={index} message={item} user={this.props.user} />
                    )}
                </div>
                <div className="form__row">
                    <input
                        className="input"
                        type="text"
                        placeholder=""
                        value={this.state.message}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button
                        className="button"
                        onClick={this.handleSend}
                    >
                        send
          </button>
                </div>
            </div>
        );
    }
}