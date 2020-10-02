const mongoose = require("mongoose");
const { Schema } = mongoose;

// subdocument embedded in survey schema
// ... each recipient of a survey must adhere to the following schema
const recipientSchema = new Schema({
    email: String,
    responded: {
        type: Boolean,
        default: false
    }
});


module.exports = recipientSchema;