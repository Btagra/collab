const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    image: { type: String, required: true },
    portfolios: [String],
    bio: String,
    instruments: [String],
    genres: [String],
    // Show how long someone has been a user, if necessary
    date: { type: Date, default: Date.now }
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;