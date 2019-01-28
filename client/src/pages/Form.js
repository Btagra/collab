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
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
    }

    

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log('this is our name and this is our value !!', name, value)
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log('form submitted!!!!', this.state)

        if (!this.state.firstname || !this.state.lastname) {
            alert("Fill all the fields");
        }

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
                            label="Profile Picture"
                            help="Upload a profile picture."
                        />
                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Bio</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Write a few sentences about yourself!"/>
                        </FormGroup>
                    </Form>
                   
               
                <div>

             <h2>Questions</h2>
           
     
             <h3><strong>Question 1</strong></h3>
             <h4>You enjoy playing the piano and writing chord prgressions</h4>
             <select name={'q1'} onChange={this.handleInputChange} className="chosen-select" id="q1">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
             <h3><strong>Question 2</strong></h3>
             <h4>You are an avid guitar player</h4>
             <select name={'q2'} onChange={this.handleInputChange} className="chosen-select" id="q2">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
     
             <h3><strong>Question 3</strong></h3>
             <h4>When it comes to playing the drums you are a natural</h4>
             <select name={'q3'} onChange={this.handleInputChange} className="chosen-select" id="q3">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
     
             <h3><strong>Question 4</strong></h3>
             <h4>You have a deep love for live instrumentation</h4>
             <select name={'q4'} onChange={this.handleInputChange} className="chosen-select" id="q4">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
     
             <h3><strong>Question 5</strong></h3>
             <h4>You consider yourself a vocalist</h4>
             <select name={'q5'} onChange={this.handleInputChange} className="chosen-select" id="q5">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
     
             <h3><strong>Question 6</strong></h3>
             <h4>Producing music and making beats in your passion</h4>
             <select name={'q6'} onChange={this.handleInputChange} className="chosen-select" id="q6">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
     
             <h3><strong>Question 7</strong></h3>
             <h4>Hip Hop and Rap is your favorite genre</h4>
             <select name={'q7'} onChange={this.handleInputChange} className="chosen-select" id="q7">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
             <h3><strong>Question 8</strong></h3>
             <h4>Rock is your favorite genre</h4>
             <select name={'q8'} onChange={this.handleInputChange} className="chosen-select" id="q8">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
             <h3><strong>Question 9</strong></h3>
             <h4>You enjoy Electronic music and unique sounds</h4>
             <select name={'q9'} onChange={this.handleInputChange} className="chosen-select" id="q9">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
     
             <h3><strong>Question 10</strong></h3>
             <h4>You enjoy writing songs</h4>
             <select name={'q10'} onChange={this.handleInputChange} className="chosen-select" id="q10">
                 <option value=""></option>
                 <option value="1">1 (Strongly Disagree)</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5 (Strongly Agree)</option>
             </select>
             
               </div>
               {/* <Link to={`/`}> */}
               <Button onClick={this.handleFormSubmit}>Submit!!</Button>
               {/* </Link> */}
               </Grid>  
            </>
            
                    
        );
    }
}

export default Form1;