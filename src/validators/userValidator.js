const Joi = require("joi");

// Register schema
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(10).required(),
  firstname: Joi.string().min(3).max(10).required(),
  lastname: Joi.string().min(3).max(10).required(),
  gender: Joi.boolean().required(),
  email: Joi.string().email().required(),

  password: Joi.string()
    .min(8)
    .pattern(/^[a-zA-Z0-9@#$%^&*!]+$/)
    .required(),

  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
  }),
});

// Login schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
};
