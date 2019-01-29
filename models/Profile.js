const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { data: Buffer, contentType: String },
    portfolios: [String],
    bio: String,
    instruments: [String],
    genres: [String],
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: Number,
    q6: Number,
    q7: Number,
    q8: Number,
    q9: Number,
    q10: Number,
    date: { type: Date, default: Date.now }
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;