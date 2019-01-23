import React, { Component } from "react";
import axios from "axios";

class AddNote extends Component {
    state = {
        title: "",
        body: ""
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        console.log(event);
        event.preventDefault();
        if (this.state.title && this.state.body) {
            axios
                .post("/api/notes/create", {
                    title: this.state.title,
                    body: this.state.body,
                    uid: this.props.uid
                })
                .then(res => this.props.fetchNotes())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <form>
                <input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    type="text"
                    name="title"
                    placeholder="Title"
                />
                <input
                    value={this.state.body}
                    onChange={this.handleInputChange}
                    name="body"
                    placeholder="note"
                />
                <button
                    disabled={!(this.state.title && this.state.body)}
                    onClick={this.handleFormSubmit}
                >
                    Submit
        </button>
            </form>
        );
    }
}

export default AddNote;
