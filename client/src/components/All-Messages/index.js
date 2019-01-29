//list of messages that been sent
import React from 'react';

import Message from '../Message/index';

class Messages extends React.Component {
    componentDidMount() {
        const uid = localStorage.getItem("uid")
        this.setState({ uid })
    }

    render() {
        // Loop through all the messages in the state and create a Message component
        const messages = this.props.messages.map((message, i) => {
            return (
                <Message
                    key={i}
                    username={message.username}
                    message={message.message}
                    fromMe={message.fromMe} />
            );
        });

        return (
            <div className='messages' id='messageList'>
                {messages}
            </div>
        );
    }
}

Messages.defaultProps = {
    messages: []
};

export default Messages;