import React, { Component } from "react";
import axios from "axios";
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
                    // this.props.fetchMessages();
                } else {
                    console.log('Request failure: ', res)
                }
            })
            .catch((error) => {
                console.log('Request failure: ', error)
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
            <div className="guestbookDiv">
                <form onSubmit={this.addToMessageBoard} className="guestBookForm">
                    <label htmlFor="" className="guestlabel">
                        What is your name?
                  </label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        className="NameinputForm"
                    />
                    <label className="guestlabel" htmlFor="">
                        Leave a nice message:
                  </label>
                    <textarea
                        className="MessageinputForm"
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <div className="Submit">
                        <button type="submit" value="Submit" className="guestbook-message">
                            Submit Message
                    </button>
                    </div>
                </form>
            </div>
        )
    }




}
export default Form;