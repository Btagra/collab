var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    uid: {
        type: String,
        unique: true
    },
    profiles: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Note model
            ref: "Profile"
        }
    ]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
