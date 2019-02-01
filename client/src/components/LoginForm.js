import React from 'react';
import fire from '../config/Fire';
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import API from '../utils/API';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        show: false
    }

    componentDidMount() {
        this.handleShow();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.show) {
            this.handleShow();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.email || !this.state.password) {
            alert("Please fill out your email and password!");
        }
        else if (this.state.password.length < 6) {
            alert(`Password should be at least 6 characters.`);
        }
        else {
            if (this.props.type === "Login") {
                fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
                    const uid = u.user.uid

                    localStorage.setItem("uid", uid)
                }).catch((error) => {
                    console.log(error);
                });
            }
            else {
                fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
                    const { history } = this.props;
                    const uid = u.user.uid
                    const userData = { uid }

                    localStorage.setItem("uid", uid)

                    API.createUser(userData).then(
                        history.push('/form')
                    );
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Row className="show-grid">
                        <Col xs={9} md={8}>
                            <Modal.Title>{this.props.type}</Modal.Title>
                        </Col>
                        <Col xsHidden md={2}></Col>
                        <Col xs={2} md={2}>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Col>
                    </Row>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                name="email"
                                type="email"
                                value={this.state.email}
                                placeholder="jane.doe@example.com"
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="formInlinePassword">
                            <ControlLabel>Password (At least 6 characters)</ControlLabel>
                            <FormControl
                                type="password"
                                name="password"
                                value={this.state.password}
                                placeholder="password"
                                onChange={this.handleChange} />
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.handleSubmit} bsStyle="primary">{this.props.type}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default withRouter(LoginForm);;