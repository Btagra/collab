import React from "react";
import { Link } from 'react-router-dom';
import { MdChat } from "react-icons/md";

class Icon extends React.Component {
    render() {
        return <Link to="/chat" ><MdChat className="iconStyle" /></Link>
    }
}

export default Icon;
