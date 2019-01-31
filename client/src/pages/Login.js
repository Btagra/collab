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


                <h2 className="aboutFont">Find artists to colloborate with based on musical compatiability. Sign up now!</h2>
                <br></br>
                <h1 className="homeFont">C</h1>
                <h1 className="homeFont">O</h1>
                <h1 className="homeFont">L</h1>
                <h1 className="homeFont">L</h1>
                <h1 className="homeFont">A</h1>
                <h1 className="homeFont">B</h1>
            </>

        );
    }
}
export default Login;