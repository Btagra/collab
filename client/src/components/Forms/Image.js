import React, { Component } from "react";
// import axios from "axios";

class Image extends Component {
    state = { selectedFile: null }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] });
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile);

        const formData = new FormData()

        formData.append(
            'myFile',
            this.state.selectedFile,
            this.state.selectedFile.name
        )

        console.log(formData)

        // Add mongodb url in axios.post("url", formData)
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