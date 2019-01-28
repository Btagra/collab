import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { 
    Button, Form, FormGroup, ControlLabel, FormControl, Grid, Alert
} from 'react-bootstrap';

class Form1 extends React.Component {
    state = {
        firstname: '',
        lastname: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <>
                <Grid>
                    <Form>
                        <Alert bsStyle="warning">
                            <strong>
                                Before you get started searching for collaborators, please tell us a little bit about yourself!
                            </strong>
                        </Alert>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>FirstName</ControlLabel>
                            <FormControl
                                name="firstname"
                                type="firstname"
                                value={this.state.firstname}
                                placeholder="firstname"
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>LastName</ControlLabel>
                            <FormControl
                                type="lastname"
                                name="lastname"
                                value={this.state.lastname}
                                placeholder="lastname"
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>LastName</ControlLabel>
                            <FormControl
                                type="lastname"
                                name="lastname"
                                value={this.state.lastname}
                                placeholder="lastname"
                                onChange={this.handleInputChange} />
                        </FormGroup>
                    </Form>
                    <Link to={`/`}><Button>Submit!!</Button></Link>
                </Grid>
            </>
        );
    }
}

export default Form1;