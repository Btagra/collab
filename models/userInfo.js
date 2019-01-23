const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    image: {type: String, required: true },
    portfolio: String,
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userInfoSchema);

module.exports = User;