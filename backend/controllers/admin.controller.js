const Admin = require("../models/admin.model")

const createUser = async(req, res, next) => {
    const {name, email, role} = req.body;
    const admin = new Admin({ name, email, role });
    await admin.save();
}

const getUsers = async(req, res, next) => {
    const users = await User.find({});
    res.send({users: users})
}

module.exports = { createUser, getUsers }