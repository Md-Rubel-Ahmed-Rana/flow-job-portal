const { validationResult, check } = require("express-validator");

const recruiterDataValidation = [
    check("name")
        .trim()
        .notEmpty()
        .withMessage("Name is missing")
        .isLength({ min: 5 })
        .withMessage("Name must have 5 charecters"),
    check("email")
        .notEmpty()
        .isEmail()
        .withMessage("Not a valid email"),
    check("company")
        .notEmpty()
        .withMessage("Company name is required"),
    check("address")
        .notEmpty()
        .withMessage("Address is required"),
    check("officeEmail")
        .notEmpty()
        .withMessage("Office Email is required"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errs = errors.array().map((error) => error.msg)
            return res.status(400).json({ errors: errs })
        }
        next()
    }
]

module.exports = recruiterDataValidation