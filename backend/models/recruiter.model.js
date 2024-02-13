const mongoose = require("mongoose");

const recruiterSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    company: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    officeEmail: {
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "employer"
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Recruiter", recruiterSchema)