const { number } = require("joi");
const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
    },
    skills: {
        type: Array,
    },
    projects: {
        type: Array,
    },
    experience: {
        type: Number,
    },
    role: {
        type: String,
        default: "candidate"
    },
    date: {
        type: Date,
        default: Date.now(),
    },
 }
);

module.exports = mongoose.model("Candidate", candidateSchema)