const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    // email: { type: String, required: true, lowercase: true },
    image: { data: Buffer, contentType: String },
    portfolios: [String],
    bio: String,
    instruments: [String],
    genres: [String],
    // Show how long someone has been a user, if necessary
    date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;