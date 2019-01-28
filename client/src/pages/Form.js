import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { 
    Button, Form, FormGroup, ControlLabel, FormControl, Grid, Alert, HelpBlock
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
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
                        <FieldGroup
                            id="formControlsFile"
                            type="file"
                            label="Profile Picture"
                            help="Upload a profile picture."
                        />
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Bio</ControlLabel>
                            <FormControl componentClass="textarea" style={{ height: 150}} placeholder="Write a few sentences about yourself!"/>
                        </FormGroup>
                        <FormGroup controlId="formControlsSelectMultiple">
                            <ControlLabel>What Instruments/Technologies Do You Use?</ControlLabel>
                            <FormControl style={{ height: 150}} componentClass="select" multiple>
                                <option value="select">Guitar</option>
                                <option value="select">Bass</option>
                                <option value="select">Piano</option>
                                <option value="select">Violin</option>
                                <option value="select">Harmonica</option>
                                <option value="select">Synth</option>
                                <option value="select">FL Studio</option>
                                <option value="select">Pro Tools</option>
                                <option value="select">Ableton Live</option>
                                <option value="select">Logic Pro</option>
                                <option value="select">Other (List in Bio!)</option>
                            </FormControl>
                        </FormGroup>
                    </Form>
                    <Link to={`/`}><Button>Submit!!</Button></Link>
                </Grid>
            </>
        );
    }
}

export default Form1;