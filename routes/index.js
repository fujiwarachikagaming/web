var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("home", { title: "藤原 千花 Gaming" });
});

/* GET about page */
router.get("/about/", function(req, res, next) {
  res.render("about", { title: "about" });
});

module.exports = router;
