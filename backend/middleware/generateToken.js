require("dotenv").config()
const jwt = require("jsonwebtoken");
const Candidate = require("../models/candidate.model");
const Recruiter = require("../models/recruiter.model");

const generateToken = async(req, res, next) => {
    try {
        let user = {}
        const email = req.body.email;
        const candidate = await Candidate.findOne({ email: email })
        if (candidate) {
            user = {
                name: candidate.name,
                email: candidate.email,
                role: candidate.role
            }
            const token = await jwt.sign(user, process.env.SECRET_KEY);
                req.user = user,
                req.token = "Bearer " + token
        } else {
            const recruiter = await Recruiter.findOne({ email: req.body.email });
            user = {
                name: recruiter.name,
                email: recruiter.email,
                role: recruiter.role
            }
            const token = await jwt.sign(user, process.env.SECRET_KEY);
                req.user = user,
                req.token = "Bearer " + token
        }
        next()
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = generateToken