const successHandler = require('../handlers/successHandler')
const asyncHandler = require('express-async-handler')
const userService = require('../services/userService')

const registerUser = asyncHandler(async (req, res) => {
    const user = await userService.register(req.body)
    successHandler(res, user, 'User registered successfully', 201)
})
const loginUser = asyncHandler(async (req, res) => {
    const user = await userService.login(req.body)
    successHandler(res, user, 'User Logged In successfully', 201)
})
module.exports = {
    loginUser,
    registerUser,
}
