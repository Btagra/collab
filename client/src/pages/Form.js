import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, ControlLabel, FormControl, Grid, Alert, Checkbox } from 'react-bootstrap';
import API from "../utils/API";
import {storageService, storageRef} from "../config/Fire"

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
        selectedFile: null,
    }

    componentDidMount() {
        const uid = localStorage.getItem("uid")
        this.setState({ uid })
    }

    imageUpload = event => {
        console.log("hey")
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] });
        console.log(event.target.files[0]);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(`${name}: ${value}`)
        this.setState({
            [name]: value
        });
    };

    handleCheckChange = event => {
        // Current array of instruments
        const instruments = this.state.instruments
        // Placeholder index value
        let index;

        // Check if box is checked or unchecked
        if (event.target.checked) {
            instruments.push(event.target.name)
        }
        else {
            // Remove from array if unchecked
            index = instruments.indexOf(event.target.name)
            instruments.splice(index, 1)
        }

        // Update state with new array of options
        this.setState({ instruments: instruments})
        console.log(instruments);
    }

    handleFormSubmit = event => {
        event.preventDefault();

        console.log('Form submitted.', this.state)

        if (
            !this.state.firstname || 
            !this.state.lastname ||
            !this.state.bio ||
            !this.state.instruments ||
            !this.state.selectedFile 
        ) {
            alert("Please fill out all required fields.");
        }
        else {
            // Create a child directory called images, and place the file inside this directory
            const uploadTask = 
            storageRef.child(`images/${this.state.selectedFile.name}`).put(this.state.selectedFile);

            uploadTask.on("state_changed", snapshot => {
                // Observe state changes 
            }, (error) => {
                // Handle errors
                console.log(error);
            }, () => {
                // Do something once upload completes
                console.log("Image uploaded!");
            })

            const { history } = this.props;
            const profileData = { ...this.state }
            console.log(profileData);
            API.createProfile(profileData)
                .then(history.push('/'))
        }
    }

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
                        <FormGroup controlId="forminline Name">
                            <ControlLabel>First Name</ControlLabel>
                            <FormControl
                                name="firstname"
                                type="firstname"
                                value={this.state.firstname}
                                placeholder="Bobby"
                                onChange={this.handleInputChange} 
                            />
                        </FormGroup>
                        <FormGroup controlId="forminline Name">
                            <ControlLabel>Last Name</ControlLabel>
                            <FormControl
                                type="lastname"
                                name="lastname"
                                value={this.state.lastname}
                                placeholder="Shmurda"
                                onChange={this.handleInputChange} 
                            />
                        </FormGroup>
                        
                        <FieldGroup
                            id="formControlsFile"
                            type="file"
                            label="Profile Picture"
                            accept="image/jpeg, image/png"
                            onChange={this.fileChangedHandler}
                        />

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Bio</ControlLabel>
                            <FormControl 
                                name="bio"
                                type="bio"
                                value={this.state.bio}
                                componentClass="textarea" 
                                placeholder="Write at least a few sentences about yourself!"
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>

                        <ControlLabel>What Instruments/Technologies Do You Use?</ControlLabel>
                        <FormGroup>                           
                            <Checkbox 
                                inline  
                                name="Guitar (Electric)"
                                onChange={this.handleCheckChange}
                            >
                                Guitar (Electric)
                            </Checkbox>
                            <Checkbox 
                                inline 
                                name="Guitar (Acoustic)"
                                onChange={this.handleCheckChange}
                            >
                                Guitar (Acoustic)
                            </Checkbox>
                            <br/>
                            
                            <Checkbox 
                                inline 
                                name="Bass (Electric)"
                                onChange={this.handleCheckChange}
                            >
                                Bass (Electric)
                            </Checkbox>
                            <Checkbox 
                                inline 
                                name="Bass (Acoustic)"
                                onChange={this.handleCheckChange}
                            >
                                Bass (Acoustic)
                            </Checkbox>
                            <br/>

                            <Checkbox 
                                inline 
                                name="Piano"
                                onChange={this.handleCheckChange}
                            >
                                Piano
                            </Checkbox>
                            <Checkbox 
                                inline 
                                name="Violin"
                                onChange={this.handleCheckChange}
                            >
                                Violin
                            </Checkbox>
                            <br/>
                            
                            <Checkbox 
                                inline 
                                name="Harmonica"
                                onChange={this.handleCheckChange}
                            >
                                Harmonica
                            </Checkbox>
                            <Checkbox 
                                inline 
                                name="Synths"
                                onChange={this.handleCheckChange}
                            >
                                Synths
                            </Checkbox>
                            <br/>

                            <Checkbox 
                                inline 
                                name="FL Studio"
                                onChange={this.handleCheckChange}
                            >
                                FL Studio
                            </Checkbox>
                            <Checkbox 
                                inline 
                                name="Pro Tools"
                                onChange={this.handleCheckChange}
                            >
                                Pro Tools
                            </Checkbox>
                            <br/>

                            <Checkbox 
                                inline 
                                name="Ableton Live"
                                onChange={this.handleCheckChange}
                            >
                                Ableton Live
                            </Checkbox>
                            <Checkbox 
                                inline 
                                name="Logic Pro"
                                onChange={this.handleCheckChange}
                            >
                                Logic Pro
                            </Checkbox>
                            <br/>
                            
                            <Checkbox 
                                inline 
                                name="Other"
                                onChange={this.handleCheckChange}
                            >
                                Other (Make sure to list in bio!)
                            </Checkbox>
                        </FormGroup>
                    </Form>

                    <Button onClick={this.handleFormSubmit}>Submit!!</Button>
                </Grid>
            </>
        );
    }
}


export default Form1;