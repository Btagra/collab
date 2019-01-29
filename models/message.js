var mongoose = require("mongoose");
const signatureSchema = new mongoose.Schema({

    message: {
        type: String,
        required: true,
    },
})
const Signature = mongoose.model('Signature', signatureSchema);
module.exports = Signature;