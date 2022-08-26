//user modelinin route'u

const express = require("express");
const authController = require("../controllers/authController");
const redirectMiddleware = require("../middlewares/redirectMiddleware");

const router = express.Router();

//router.route("/signup").post(authController.createUser);
router.route("/login").post(authController.loginUser);
router.route("/logout").get(authController.logOutUser);
module.exports = router;
