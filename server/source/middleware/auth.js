"use strict";
const jwt = require("jsonwebtoken");
const createResponse = require("../utils/response");
const User = require("../model/user");

// to check the validation for token and authentication
const auth = async (request, response, next) => {
  const token = request.header("Authorization");
  try {
    if (!token) {
      return createResponse(response, 401, "Please provide a valid token");
    }

    jwt.verify(token, "jwt-secret", async function (error, verified) {
      if (error) {
        if (error.message == "jwt expired") {
          return createResponse(response, 401, "Token Expired");
        }
        return createResponse(response, 403, error.message);
      }

      request["user"] = verified;

      const id = request.user.id;
      const user = await User.findById(id);
      if (!user) {
        return createResponse(response, 404, "User not found");
      }

      return next();
    });
  } catch (error) {
    return createResponse(response, error.status, error.message);
  }
};

module.exports = auth;
