const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n72f5gi.mongodb.net/flow-job-portal`;
const mongoose = require("mongoose");


const db_type = "Cluster"

mongoose.set('strictQuery', false)
// connecting to database
mongoose.connect(DB_URI, () => {
    console.log("Database connected", "with", db_type);
})


module.exports = DB_URI