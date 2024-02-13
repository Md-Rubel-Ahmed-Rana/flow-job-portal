const { createUser, getUsers } = require("../controllers/admin.controller");

const adminRouter = require("express").Router();

// create new user
adminRouter.post("/", createUser)
adminRouter.get("/", getUsers)


module.exports = adminRouter