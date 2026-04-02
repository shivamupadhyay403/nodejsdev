// controllers/authController.js
const { registerSchema, loginSchema } = require('../validators/userValidator')
const asyncHandler = require('express-async-handler')
const registerUser = async (req, res) => {
    const { error, value } = registerSchema.validate(req.body, {
        abortEarly: false,
    })

    if (error) {
        const errors = error.details.map((d) => d.message)
        return res.status(400).json({ success: false, errors })
    }

    // proceed with registration using `value` (sanitized data)
    // e.g. await User.create(value);
    res.status(201).json({ success: true, message: 'User registered' })
}

const loginUser = asyncHandler(async (req, res) => {
    const { error, value } = loginSchema.validate(req.body, {
        abortEarly: true,
    })

    if (error) {
        const errors = error.details.map((d) => d.message)
        return res.status(400).json({ success: false, errors })
    }

    // proceed with login logic using `value`
    res.status(200).json({ success: true, message: 'Login successful' })
})
module.exports = {
    loginUser,
    registerUser,
}
