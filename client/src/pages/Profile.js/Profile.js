import React from "react";

function ProfileForm({ q, handleInputChange, handleFormSubmit}) {
    return(
        <form>
            <div className="form-group">
                <label htmlFor="Query">Profile Image: </label>
                <input 
                    className="form-control" 
                    id="Title" 
                    type="text" 
                    value={q}
                    placeholder=""
                    name="image"
                    onChange={handleInputChange}
                    required 
                />
            </div>
            <div className="pull-right">
                <button 
                    onClick={handleFormSubmit}
                    type="submit"
                    // className="btn btn-lg btn-danger float-right"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default ProfileForm;