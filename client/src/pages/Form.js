import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Button, Form, FormGroup, ControlLabel, FormControl, Grid, Alert, Checkbox, Row, Col
} from 'react-bootstrap';
import API from "../utils/API";
import { storageService, storageRef } from "../config/Fire"
import validator from "validator"
import './Form.css';

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
        genres: [],
        portfolios: '',
        selectedFile: null,
        image: '',
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1,
        q5: 1,
        q6: 1,
        q7: 1,
        q8: 1,
        q9: 1,
        q10: 1
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
    }

    handleInputChange = event => {
        const { name, value } = event.target;
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
        this.setState({ instruments: instruments })
    }

    handleGenreChange = event => {
        // Current array of instruments
        const genres = this.state.genres
        // Placeholder index value
        let index;

        // Check if box is checked or unchecked
        if (event.target.checked) {
            genres.push(event.target.name)
        }
        else {
            // Remove from array if unchecked
            index = genres.indexOf(event.target.name)
            genres.splice(index, 1)
        }

        // Update state with new array of options
        this.setState({ genres: genres })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        if (
            !this.state.firstname ||
            !this.state.lastname ||
            !this.state.bio ||
            !this.state.instruments ||
            !this.state.genres ||
            !this.state.selectedFile ||
            !this.state.portfolios
        ) {
            alert("Please fill out all fields!");
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
                storageService.ref("images").child(this.state.selectedFile.name)
                    .getDownloadURL().then(url => {
                        this.setState({ image: url })

                        const { history } = this.props;
                        const profileData = { ...this.state }
                        if (validator.isURL(this.state.portfolios) === false) {
                            alert("Please include a valid URL for your portfolio!")
                        }
                        else {
                            API.createProfile(profileData)
                                .then(() => history.push('/'))
                        }
                    })
            });
        }
    }

    render() {
        return (
            <>
                <Grid>
                    <Form>
                        <Row>
                            <Col>
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

                                <FormGroup controlId="forminline portfolio">
                                    <ControlLabel>Add a Link to Your Portfolio/Social Media</ControlLabel>
                                    <FormControl
                                        name="portfolios"
                                        type="portfolios"
                                        value={this.state.portfolios}
                                        placeholder="https://soundcloud.com/goodmusic"
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

                                <ControlLabel>(Please Select at Least One of Each!)</ControlLabel>
                            </Col>

                            <Col className="col-md-4">
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
                                    <br />

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
                                    <br />

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
                                    <br />

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
                                    <br />

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
                                    <br />

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
                                    <br />

                                    <Checkbox
                                        inline
                                        name="Other"
                                        onChange={this.handleCheckChange}
                                    >
                                        Other (Make sure to list it in your bio!)
                                    </Checkbox>
                                </FormGroup>
                            </Col>

                            <Col className="col-md-4">
                                <ControlLabel>What Genres of Music Do You Enjoy?</ControlLabel>
                                <FormGroup>
                                    <Checkbox
                                        inline
                                        name="Pop"
                                        onChange={this.handleGenreChange}
                                    >
                                        Pop
                                    </Checkbox>
                                    <Checkbox
                                        inline
                                        name="Hip Hop"
                                        onChange={this.handleGenreChange}
                                    >
                                        Hip Hop
                                    </Checkbox>
                                    <br />

                                    <Checkbox
                                        inline
                                        name="Rap"
                                        onChange={this.handleGenreChange}
                                    >
                                        Rap
                                    </Checkbox>
                                    <Checkbox
                                        inline
                                        name="Country"
                                        onChange={this.handleGenreChange}
                                    >
                                        Country
                                    </Checkbox>
                                    <br />

                                    <Checkbox
                                        inline
                                        name="Classical"
                                        onChange={this.handleGenreChange}
                                    >
                                        Classical
                                    </Checkbox>
                                    <Checkbox
                                        inline
                                        name="EDM"
                                        onChange={this.handleGenreChange}
                                    >
                                        EDM
                                    </Checkbox>
                                    <br />

                                    <Checkbox
                                        inline
                                        name="Jazz"
                                        onChange={this.handleGenreChange}
                                    >
                                        Jazz
                                    </Checkbox>
                                    <Checkbox
                                        inline
                                        name="Rock and Roll"
                                        onChange={this.handleGenreChange}
                                    >
                                        Rock and Roll
                                    </Checkbox>
                                    <br />

                                    <Checkbox
                                        inline
                                        name="Metal"
                                        onChange={this.handleGenreChange}
                                    >
                                        Metal
                                    </Checkbox>
                                    <Checkbox
                                        inline
                                        name="Folk"
                                        onChange={this.handleGenreChange}
                                    >
                                        Folk
                                    </Checkbox>
                                    <br />

                                    <Checkbox
                                        inline
                                        name="Funk"
                                        onChange={this.handleGenreChange}
                                    >
                                        Funk
                                    </Checkbox>
                                    <Checkbox
                                        inline
                                        name="Reggae"
                                        onChange={this.handleGenreChange}
                                    >
                                        Reggae
                                    </Checkbox>
                                    <br />

                                    <Checkbox
                                        inline
                                        name="Other"
                                        onChange={this.handleGenreChange}
                                    >
                                        Other/Sub-Genre (Make sure to list it in your bio!)
                                    </Checkbox>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <div>
                        <h3><strong>Question 1</strong></h3>
                        <h4>You enjoy playing the piano and writing chord prgressions</h4>
                        <select name={'q1'} onChange={this.handleInputChange} className="chosen-select" id="q1">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>

                        <h3><strong>Question 2</strong></h3>
                        <h4>You are an avid guitar player</h4>
                        <select name={'q2'} onChange={this.handleInputChange} className="chosen-select" id="q2">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>


                        <h3><strong>Question 3</strong></h3>
                        <h4>When it comes to playing the drums you are a natural</h4>
                        <select name={'q3'} onChange={this.handleInputChange} className="chosen-select" id="q3">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>


                        <h3><strong>Question 4</strong></h3>
                        <h4>You have a deep love for live instrumentation</h4>
                        <select name={'q4'} onChange={this.handleInputChange} className="chosen-select" id="q4">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>


                        <h3><strong>Question 5</strong></h3>
                        <h4>You consider yourself a vocalist</h4>
                        <select name={'q5'} onChange={this.handleInputChange} className="chosen-select" id="q5">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>


                        <h3><strong>Question 6</strong></h3>
                        <h4>Producing music and making beats in your passion</h4>
                        <select name={'q6'} onChange={this.handleInputChange} className="chosen-select" id="q6">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>


                        <h3><strong>Question 7</strong></h3>
                        <h4>Hip Hop and Rap is your favorite genre</h4>
                        <select name={'q7'} onChange={this.handleInputChange} className="chosen-select" id="q7">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>

                        <h3><strong>Question 8</strong></h3>
                        <h4>Rock is your favorite genre</h4>
                        <select name={'q8'} onChange={this.handleInputChange} className="chosen-select" id="q8">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>

                        <h3><strong>Question 9</strong></h3>
                        <h4>You enjoy Electronic music and unique sounds</h4>
                        <select name={'q9'} onChange={this.handleInputChange} className="chosen-select" id="q9">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>

                        <h3><strong>Question 10</strong></h3>
                        <h4>You enjoy writing songs</h4>
                        <select name={'q10'} onChange={this.handleInputChange} className="chosen-select" id="q10">
                            <option value="1">1 (Strongly Disagree)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (Strongly Agree)</option>
                        </select>

                    </div>
                    <br></br>

                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                </Grid>
            </>
        );
    }
}


export default Form1;