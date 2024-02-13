const { createRecruiter, getAllRecruiters } = require("../controllers/recruiter.controller");
const recruiterDatavalidator = require("../validators/recruiter.validator");

const router = require("express").Router();

// get all the recruiters
router.get("/", getAllRecruiters);


// create recruiter
router.post("/", recruiterDatavalidator, createRecruiter)


module.exports = router