const express = require("express");
const pageController = require("../controllers/pageController");
const redirectMiddleware = require("../middlewares/redirectMiddleware");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/add").get(redirectMiddleware, pageController.getAddPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/contact").post(pageController.sendEmail);
//router.route("/signup").get(pageController.getSingUpPage);

module.exports = router;
