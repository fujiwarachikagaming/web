var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET about page */
router.get("/about/", function(req, res, next) {
  res.render("about", { title: "About" });
});

/* GET join page */
router.get("/join/", function(req, res, next) {
  res.render("join", { title: "Join" });
});

/* GET contact page */
router.get("/contact/", function(req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
