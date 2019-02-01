import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import Form from '../Chat-Form/index';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            messages: '',
            chatList: [],
        }
    }

    componentDidMount = () => {
        this.fetchMessages();
    }
    fetchMessages = () => {
        axios.get("/api/messages")
            .then((res) => {
                const chatList = res.data.map(this.createChat)

                this.setState({ chatList })
            })
    }
    createChat = (chat) => {
        return (
            <div key={chat._id} className="chat">
                <h3 className="chat.message">{chat.message}</h3>
                <h2 className="chat.name">-{chat.name}</h2>
            </div>
        );
    }
    
    render() {

        return (
            <div>
                <h6 className="welcome"> Welcome to Chat</h6>
                <div className="chatData">{this.state.chatList}</div>
                <Form fetchMessages={this.fetchMessages} />
            </div>
        );
    }
}

export default Message;