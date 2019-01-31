const mongoose = require('mongoose');

const signatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})
const Signature = mongoose.model('Signature', signatureSchema);

module.exports = Signature;