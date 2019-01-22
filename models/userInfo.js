const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({

});

const User = mongoose.model("User", userInfoSchema);

module.exports = User;