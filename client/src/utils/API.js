import axios from "axios";

export default {
    // define your front end API calls here, like so:
    // getArticles: function(params) {
    //   return axios.get("/api/nyt", {someDATA: data});
    // }
    //they can then be imported and used inside of your react components/

    createUser: function (userData) {
        return axios.post("/api/user/create", userData);
    },
    createProfile: function (profileData) {
        console.log('from API.js ', profileData)
        return axios.post("/api/profiles/create", profileData);
    }
};
