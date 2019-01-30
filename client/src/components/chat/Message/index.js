import React, { Component } from "react";
import { URL } from "url";
import axios from "axios"
import Form from '../Chat-Form/index'


class Message extends Component {
    constructor() {
        super()
        this.state = {
            messages: '',
            messageList: [],
        }
    }

    componentDidMount = () => {

        this.fetchMessages();

    }
    fetchMessages = () => {
        axios.get("/api/messages")

            // .then((res) => {

            //     this.setState({ messages: res.data })
            // })
            .then((res) => {
                const messageList = res.data.map(this.createList)
                this.setState({ messageList })
                console.log(messageList + "messagelist");

            })
    }
    createList = (signature) => {
        return (
            <div key={signature._id} className="signature">
                <h3 className="h3msg">{signature.message}</h3>
                <h2 className="h2sig">-{signature.name}</h2>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h6> Guest Messages</h6>
                <div className="guestdataContainer">{this.state.messageList}</div>
                <Form fetchMessages={this.fetchMessages} />
            </div>
        )
    }
}
export default Message;