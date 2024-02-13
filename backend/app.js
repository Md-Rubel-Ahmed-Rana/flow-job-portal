const express = require("express");
const cors = require("cors");
const candidateRouter = require("./routers/candidate.router");
const recruiterRouter = require("./routers/recruiter.router");
const passport = require("passport");
const generateToken = require("./middleware/generateToken");
const verifyPassword = require("./middleware/verifyPassword");
const candidateModel = require("./models/candidate.model");
const recruiterModel = require("./models/recruiter.model");
const jobRouter = require("./routers/job.route");
const adminRouter = require("./routers/admin.router");
// create express app
const app = express();

// global middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(passport.initialize())

// global route to test
app.get("/", (req, res) => {
    res.send("Job portal server is running")
})

// ========== routes ===============

// admin route
app.use("api/admin", adminRouter)
// candidate route
app.use("/api/candidates", candidateRouter)
// recruiter route
app.use("/api/recruiters", recruiterRouter);

// jobs route
app.use("/api/jobs", jobRouter)

// testing route for user register
app.get("/currentUser/:email", async(req, res) => {
    try {
        const recruiter = await recruiterModel.findOne({ email: req.params.email });
        if (recruiter) {
            return res.send({ user: recruiter }) 
        }else{
            const candidate = await candidateModel.findOne({ email: req.params.email });
            return res.send({ user: candidate })
        }
    } catch (error) {
        
    }
})

// private route
app.post('/login', verifyPassword, generateToken, (req, res) => {
    const user = req.user
    const token = req.token
    res.send({ user, token })
});

app.get("/profile", passport.authenticate('jwt', { session: false }, (req, res) => {
    console.log(req);
}))

// error handler
app.use("*", (req, res) => {
    return res.status(404).json({
        succes: false,
        message: "Route not found"
    })
})

module.exports = app