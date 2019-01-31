import React, { Component } from "react";
import axios from "axios";
import "./style.css";
class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            message: '',
        }
    }

    handleChange = (event) => {
        console.log(event.target.value + "this is our event");

        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    addToMessageBoard = (event) => {
        event.preventDefault()
        axios.post("/api/messages", {

            name: this.state.name,
            message: this.state.message,

        })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Request success: ', res)
                    this.setState({
                        name: '',
                        message: '',
                    })
                    console.log(this.props.fetchMessages);

                    this.props.fetchMessages();
                } else {
                    console.log('Request failure: ', res)
                }
            })
            .catch((error) => {
                console.log('Request failure: ', error)
            })
    }
    createList = (chat) => {
        return (
            <div key={chat._id} className="chat">
                <h3 className="h3msg">{chat.message}</h3>
                <h2 className="h2sig">-{chat.name}</h2>
            </div>
        )
    }
    render() {
        return (
            <div className="chatting">
                <form onSubmit={this.addToMessageBoard} className="chatForm">
                    <label htmlFor="" className="namelabel">
                        Please type your name
                  </label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        className="nameinputForm"
                    />
                    <label className="namelabel" htmlFor="">
                        Ask questions or leave comments
                  </label>
                    <textarea
                        className="messageinputForm"
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <div className="Submit">
                        <button type="submit" value="Submit" className="chat-message">
                            Send
                    </button>
                    </div>
                </form>
            </div>
        )
    }




}
export default Form;