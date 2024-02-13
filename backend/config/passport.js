require("dotenv").config()
const passport = require("passport");
const Candidate = require("../models/candidate.model");
const Recruiter = require("../models/recruiter.model");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;


passport.use(new JwtStrategy(opts, async(user, done) => {
    try {
        const candidate = await Candidate.findOne({ email: user.email });
        if (candidate){
            return done(null, candidate);
        }else{
            const recruiter = await Recruiter.findOne({ email: user.email })
            return done(null, recruiter);
        }
    } catch (error) {
        return done(error, null);
    }
}));
