import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { 
    Button, Form, FormGroup, ControlLabel, FormControl, Grid, Alert
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {/* {help && <HelpBlock>{help}</HelpBlock>} */}
      </FormGroup>
    );
}

class Form1 extends React.Component {
    state = {
        firstname: '',
        lastname: '',
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
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl
                                name="firstname"
                                type="firstname"
                                value={this.state.firstname}
                                placeholder="Bobby"
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl
                                type="lastname"
                                name="lastname"
                                value={this.state.lastname}
                                placeholder="Shmurda"
                                onChange={this.handleInputChange} />
                        </FormGroup>
                        {/* <FormGroup controlId="formInlineName">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                type=""
                                name="email"
                                value={this.state.email}
                                placeholder="headhoncho@tunes.com"
                                onChange={this.handleInputChange} />
                        </FormGroup> */}
                        <FieldGroup
                            id="formControlsFile"
                            type="file"
                            label="File"
                            // help="Example block-level help text here."
                        />
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Bio</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Write a few sentences about yourself!"/>
                        </FormGroup>
                    </Form>
                    <Link to={`/`}><Button>Submit!!</Button></Link>
                </Grid>
            </>
        );
    }
}

export default Form1;