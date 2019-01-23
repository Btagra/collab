import React, { Component } from "react";
import AddNote from "./AddNote";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from "axios";
import "./Notes.css";
class Notes extends Component {
    state = {
        notes: []
    };

    componentDidMount() {
        this.fetchNotes();
    }

    fetchNotes = () => {
        axios.get(`/api/notes/${this.props.uid}`).then(res => {
            console.log(res);
            const notes = res.data[0].notes;
            if (notes !== 0) {
                this.setState({
                    notes
                });
            }
            console.log("state after notes came back!", this.state);
        });
    };

    render() {
        //render notes
        //create form for new notes in dif component
        const transitionOptions = {
            classNames: "note",
            timeout: 500
        };
        return (
            <>
                <h3>Your Notes:</h3>
                <ol>
                    <TransitionGroup>
                        {this.state.notes.map((note, i) => {
                            return (
                                <CSSTransition {...transitionOptions} key={i}>
                                    <li key={i} className="note">
                                        <h5>Title:{note.title}</h5>
                                        <p>{note.body}</p>
                                    </li>
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </ol>
                <AddNote fetchNotes={this.fetchNotes} uid={this.props.uid} />
            </>
        );
    }
}

export default Notes;
