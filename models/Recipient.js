const mongoose = require('mongoose'); 
const { Schema } = mongoose; 

// this will be a sub-document for Survey

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
})

module.exports = recipientSchema; 