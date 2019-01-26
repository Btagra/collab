import React, { Component } from "react";

class LastName extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        // Alert is just for testing
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Last Name: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
  }

  export default LastName;