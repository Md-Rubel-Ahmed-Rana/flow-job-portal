const bcrypt = require("bcrypt");
const candidateModel = require("../models/candidate.model");
const recruiterModel = require("../models/recruiter.model");


const verifyPassword = async(req, res, next) => {
    const candidate = await candidateModel.findOne({email: req.body.email});
    if (candidate){
        const isVerified = await bcrypt.compare(req.body.password, candidate.password);
        if (!isVerified){return res.send({ error: "Incorrect password" })}
    }else{
        const recruiter = await recruiterModel.findOne({ email: req.body.email });
        const isVerified =await bcrypt.compare(req.body.password, recruiter.password);
        if (!isVerified) {return res.send({ error: "Incorrect password" })}
    }
    next()
}

module.exports = verifyPassword