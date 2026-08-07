const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { userVerification } = require("../middlewares/userVerification");
const validate = require("../middlewares/validate");
const { signupSchema, loginSchema } = require("../validations/userValidation");

router.post("/signup", validate(signupSchema), userController.signup);

router.post("/login", validate(loginSchema), userController.login);

router.get("/logout", userController.logout);

router.get("/me", userVerification);

module.exports = router;
