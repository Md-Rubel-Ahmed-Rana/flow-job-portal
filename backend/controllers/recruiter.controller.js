const Recruiter = require("../models/recruiter.model");
const Candidate = require("../models/candidate.model");
const bcrypt = require("bcrypt")

// get all the recruiters
const getAllRecruiters = async(req, res) => {
    try {
        const candidates = await Recruiter.find({});
        res.status(200).json({ success: true, candidates: candidates })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// create new recruiter
const createRecruiter = async(req, res) => {
    try {
        const candidate = await Candidate.findOne({ email: req.body.email });
        const recruiter = await Recruiter.findOne({ email: req.body.email });
        if (recruiter || candidate) { return res.send({ error: "Account already used" }) }
        
        // bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            // if (err) { return res.send({ error: err.message }) }
            const { name, email, company, address, officeEmail } = req.body;
            const newRecruiter = new Recruiter({ name, email, company, address, officeEmail})
            await newRecruiter.save()
            res.send({ success: true, message: "Account created successfully" })
        // })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = { createRecruiter, getAllRecruiters }