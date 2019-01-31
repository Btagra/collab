import React, { Component } from 'react'
import "./style.css";
import Message from "../Message/index";

class App1 extends Component {
    render() {
        return (
            <div className="constainer1">
                <div className="container">
                    <Message />

                </div>
            </div>
        )
    }
}

export default App1;