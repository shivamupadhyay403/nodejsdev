const jwt = require('jsonwebtoken')
const validateUserToken = (req, res, next) => {
    const headers = req.headers.authorization
    if (!headers) {
        return res.status(401).json({
            data: null,
            message: 'Authorization Header not Provided',
            success: false,
        })
    }
    const parts = headers.split(' ')
    const token = parts.length == 2 ? headers[2] : headers[1]
    if (!token) {
        return res
            .status(401)
            .json({ message: 'Token is Not Provided', success: false })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({ message: err, success: false })
    }
}
module.exports = validateUserToken
