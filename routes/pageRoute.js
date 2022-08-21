const express = require("express");
const pageController = require("../controllers/pageController");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/add").get(pageController.getAddPage);
router.route("/login").get(pageController.getLoginPage);
router.route("/signup").get(pageController.getSingUpPage);

module.exports = router;
