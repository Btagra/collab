import React, { Component } from "react";

class Image extends Component {
    render() {
        return (
            <>
                <label>
                    Profile Picture: 
                    <input type="file" onChange={this.fileChangedHandler} />
                </label>
                <br/>
                <button onClick={this.uploadHandler}>Upload Your Image</button>
            </>
        );
    }
}

export default Image;