import React from 'react';
import "./style.css";
class Message extends React.Component {
    render() {
        // Was the message sent by the current user. If so, add a css class
        const fromMe = this.props.fromMe ? 'from-me' : '';

        return (
            <div className={`message ${fromMe}`}>
                <div className='username'>
                    {this.props.userName}
                </div>
                <div className='message-body'>
                    {this.props.message}
                </div>
            </div>
        );
    }
}

Message.defaultProps = {
    message: '',
    userName: '',
    fromMe: false
};

export default Message;