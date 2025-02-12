const express = require("express");
const router = express.Router();
const authController = require("../auth/authController");

const { signUpValidation, signInValidation } = require("./authValidation");
const validate = require("../../middleware/validate");

router.post("/register", validate(signUpValidation), authController.signup);
router.post("/login", validate(signInValidation), authController.signIn);


module.exports = router;
