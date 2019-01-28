import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { 
    Button, Form, FormGroup, ControlLabel, FormControl, Grid, Alert, Checkbox
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

class Form1 extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        bio: '',
        instruments: [],
        selectedFile: null
    }

    state = { selectedFile: null }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] });
        // console.log(event.target.files[0])
    }

    // imageUploadHandler = () => {
    //     console.log(this.state.selectedFile);

    //     const formData = new FormData()

    //     formData.append(
    //         'myFile',
    //         this.state.selectedFile,
    //         this.state.selectedFile.name
    //     )

    //     console.log(formData)

    //     // Add mongodb url in axios.post("url", formData)
    // }

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

                        <FormGroup controlId="formName">
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl
                                name="firstname"
                                type="firstname"
                                value={this.state.firstname}
                                placeholder="Bobby"
                                onChange={this.handleInputChange} />
                        </FormGroup>

                        <FormGroup controlId="formName">
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
                            onChange={this.fileChangedHandler} accept="image/jpeg, image/png"
                        />

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Bio</ControlLabel>
                            <FormControl 
                            componentClass="textarea" 
                            value={this.state.bio}
                            style={{ height: 150}} 
                            placeholder=
                            "Write a little about yourself, what you're looking for in a collaborator, how your workflow happens, or anything you feel like sharing!"
                            onChange={this.handleInputChange}
                            />
                        </FormGroup>

                        <ControlLabel>What Instruments/Technologies Do You Use?</ControlLabel>

                        <FormGroup>                           
                            <Checkbox inline>Guitar (Electric)</Checkbox><Checkbox inline>Guitar (Acoustic)</Checkbox>
                            <br/>
                            <Checkbox inline>Bass (Electric)</Checkbox><Checkbox inline>Bass (Acoustic)</Checkbox>
                            <br/>
                            <Checkbox inline>Piano</Checkbox><Checkbox inline>Violin</Checkbox>
                            <br/>
                            <Checkbox inline>Harmonica</Checkbox><Checkbox inline>Synths</Checkbox>
                            <br/>
                            <Checkbox inline>FL Studio</Checkbox><Checkbox inline>Pro Tools</Checkbox>
                            <br/>
                            <Checkbox inline>Ableton Live</Checkbox><Checkbox inline>Logic Pro</Checkbox>
                            <br/>
                            <Checkbox inline>Other (Make sure to list in bio!)</Checkbox>
                        </FormGroup>
                        
                        <FormGroup controlId="formControlsSelectMultiple">
                            <ControlLabel>What Instruments/Technologies Do You Use?</ControlLabel>
                            <FormControl 
                            style={{ height: 150}} 
                            onChange={this.handleInputChange}
                            componentClass="select" 
                            multiple
                            >
                                <option value="select">Guitar (Electric)</option>
                                <option value="select">Guitar (Acoustic)</option>
                                <option value="select">Bass (Electric)</option>
                                <option value="select">Bass (Acoustic)</option>
                                <option value="select">Piano</option>
                                <option value="select">Violin</option>
                                <option value="select">Harmonica</option>
                                <option value="select">Synths</option>
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