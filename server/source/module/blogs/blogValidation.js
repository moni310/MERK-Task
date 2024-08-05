const Joi = require("joi");

const postValidation = Joi.object({
  body: Joi.object({
    title: Joi.string().required().messages({
      "any.required": "Title is required",
      "string.empty": "Title cannot be empty",
    }),
    content: Joi.string().required().messages({
      "any.required": "Content is required",
      "string.empty": "Content cannot be empty",
    }),
  }),
});
const editPostValidation = Joi.object({
  body: Joi.object({
    title: Joi.string().required().messages({
      "any.required": "Title is required",
      "string.empty": "Title cannot be empty",
    }),
    content: Joi.string().required().messages({
      "any.required": "Content is required",
      "string.empty": "Content cannot be empty",
    }),
  }),
});

module.exports = {
  postValidation,
  editPostValidation,
};
