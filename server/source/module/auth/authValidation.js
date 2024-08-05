const Joi = require("joi");
const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// this function is responsible to check the validation of user details while signup
const signUpValidation = Joi.object({
  body: Joi.object({
    email: Joi.string().pattern(new RegExp(REGEX.EMAIL)).required().messages({
      "string.pattern.base": "Invalid email format",
      "any.required": "Email is required",
    }),
    password: Joi.string().required().messages({
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty",
    }),
    name: Joi.string().required().messages({
      "any.required": "Name is required",
      "string.empty": "Name cannot be empty",
    }),
    gender: Joi.string().valid("male", "female", "other").required().messages({
      "any.required": "Gender is required",
      "string.valid": "Gender must be one of 'male', 'female', or 'other'",
    }),
    age: Joi.number().min(0).required().messages({
      "any.required": "Age is required",
      "number.min": "Age must be a non-negative number",
    }),
  }),
});

// this function is responsible to check the validation of user details while signin
const signInValidation = Joi.object({
  body: Joi.object().keys({
    email: Joi.string().pattern(new RegExp(REGEX.EMAIL)).required().messages({
      "string.pattern.base": "Invalid email format",
      "any.required": "Email is required",
    }),
    password: Joi.string().required().messages({
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty",
    }),
  }),
});

module.exports = {
  signUpValidation,
  signInValidation,
};
