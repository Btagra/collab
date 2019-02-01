import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import Form from '../Chat-Form/index';
import { Grid, Row, Col } from 'react-bootstrap';

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
            <>
                <Grid>
                    <h6 className="welcome"> Welcome to Chat</h6>
                    <Row>
                        <Col>
                            <div className="chatData">{this.state.chatList}</div>
                        </Col>
                        <Col>
                            <Form fetchMessages={this.fetchMessages} /></Col>
                    </Row>
                </Grid>
            </>
        );
    }
}

export default Message;