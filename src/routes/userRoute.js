const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const validate = require('../middleware/validateMiddleware')

const {
    loginSchema,
    registerSchema,
} = require('../validators/userSchemaValidator')
router.post('/user/login', validate(loginSchema), userController.loginUser)
router.post(
    '/user/register',
    validate(registerSchema),
    userController.registerUser
)
module.exports = router
