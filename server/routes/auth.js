const express = require("express");
const router = express.Router();

const {
  register,
  login,
  resetpassword,
  forgotpassword,
} = require("../controllers/auth");

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/resetpassword").post(resetpassword);

router.route("/forgotpassword/:resetToken").put(forgotpassword);

module.exports = router;
