import axios from "axios";

export default {
    createUser: function (userData) {
        return axios.post("/api/user/create", userData);
    },
    createProfile: function (profileData) {
        console.log('from API.js ', profileData)
        return axios.post("/api/profiles/create", profileData);
    },
    getUser: function (uid) {
        console.log('from API.js ', uid);
        return axios.get("/api/profiles/" + uid);
    },
    getMatch: function (uid) {
        console.log('from API.js ', uid);
        return axios.get("http://localhost:3001/api/profiles/compare/" + uid);
    }
    // createMessage: function (message) {
    //     console.log("from API" + message);
    //     return axios.post("/api/messages");


    // }
};
