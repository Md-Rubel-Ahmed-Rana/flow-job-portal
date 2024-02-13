const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companySize: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    jobPlace: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    employerEmail: {
        type: String,
        required: true
    },
    officialEmail: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    workDay: {
        type: String,
        required: true
    },
    workTime: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    employerType: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    requirements: {
        type: Array,
        required: true
    },
    responsibilities: {
        type: Array,
        required: true
    },
    applicants: {
        type: Array,
    },
    queries: {
        type: Array,
    },
    status: {
        type: String,
        default: "open"
    },
})
const Jobs = mongoose.model("Job", jobSchema);
module.exports = Jobs
