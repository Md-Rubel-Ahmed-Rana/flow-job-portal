const { getJobs, createJob, deleteJob, getSingleJob, applyJob, getMyJobs, jobQuery, myJobPosts, closeJob } = require("../controllers/job.controller");

const jobRouter = require("express").Router();

jobRouter.get("/", getJobs)

jobRouter.get("/:id", getSingleJob)

jobRouter.post("/", createJob);

jobRouter.delete("/:id", deleteJob)

jobRouter.patch("/apply", applyJob);

jobRouter.patch("/query", jobQuery);

jobRouter.get("/myjobs/:email", getMyJobs);

jobRouter.get("/myjobposts/:email", myJobPosts);

jobRouter.put("/close/:id", closeJob);

module.exports = jobRouter