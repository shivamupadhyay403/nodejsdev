const validate = (schema, property = 'body') => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[property], {
            abortEarly: false, // show all errors
            allowUnknown: false, // reject extra fields
            stripUnknown: true, // remove unwanted fields
        })

        if (error) {
            return res.status(400).json({
                message: 'Validation error',
                errors: error.details.map((err) => ({
                    field: err.path.join('.'),
                    message: err.message,
                })),
            })
        }

        req[property] = value // sanitized data
        next()
    }
}

module.exports = validate
