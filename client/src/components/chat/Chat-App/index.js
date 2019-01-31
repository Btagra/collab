import React, { Component } from 'react'
import "./style.css";
import Message from "../Message/index";
import NavChat from "../Navbar-Chat/index";

class App1 extends Component {
    render() {
        return (
            <div className="constainer1">
                <NavChat />
                <div className="container">

                    <Message />

                </div>
            </div>
        )
    }
}

export default App1;