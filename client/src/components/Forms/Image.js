import React, { Component } from "react";

class Image extends Component {
    state = { selectedFile: null }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] });
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile);
    }

    render() {
        return (
            <>
                <label>
                    Profile Picture: 
                    <input type="file" onChange={this.fileChangedHandler} accept="image/jpeg, image/png"/>
                </label>
                <br/>
                {/* Once image is uploaded, they can submit it */}
                <button onClick={this.uploadHandler}>Upload Your Image</button>
            </>
        );
    }
}

export default Image;