const successHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 200
    res.status(statusCode).json({
        success: true,
        message: res.message,
        data: res.data,
    })
}

module.exports = successHandler
