import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
import { MdChat } from "react-icons/md";
import { LinkContainer } from 'react-router-bootstrap';




class Icon extends React.Component {
    render() {
        return (
            <LinkContainer to="/chat">
                <MdChat />
            </LinkContainer>
        )
    }
}
export default Icon;
