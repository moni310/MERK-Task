"use strict";
const Joi = require("joi");

const createResponse = require("../utils/response");
const { pick } = require("lodash");

//this function is responsible to check validation
const validate = (schema) => (request, response, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(request, Object.keys(validSchema));

  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" } })
    .validate(object);
  if (error) {
    const { details } = error;
    const message = details
      .map((i) => i.message)
      .join(",")
      .replace(/"/g, "");
    return createResponse(response, 422, message);
  }

  Object.assign(request, value);
  return next();
};

module.exports = validate;
