import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

class Login extends Component {
    state = {
        loginType: null
    }

    handleOnClick = (loginType) => {
        this.setState({ loginType })
    }

    render() {
        return (
            <>
                <Navbar handleOnClick={this.handleOnClick} />
                {this.state.loginType && <LoginForm type={this.state.loginType} />}
            </>
        );
    }
}
export default Login;