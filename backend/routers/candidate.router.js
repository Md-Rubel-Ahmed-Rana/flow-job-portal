const { createCandidate, getAllCandidates, getSingleCandidate, updateCandidateData } = require("../controllers/candidate.controller");
const candidateDataValidation = require("../validators/candidate.validator");

const candidateRouter = require("express").Router();


// get all the candidates
candidateRouter.get("/", getAllCandidates);

// get a single candidate
candidateRouter.get("/:id", getSingleCandidate);

// create new candidate
candidateRouter.post("/", candidateDataValidation, createCandidate)

// update candidate data
candidateRouter.put("/:id", updateCandidateData)

module.exports = candidateRouter