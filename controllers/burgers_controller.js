var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/index");
});

router.get("/index", function(req,res){
  burger.all(function(data){
    var hbsObject = { burgers: data };
    res.render("index", hbsObject)
  });
});





// Export routes for server.js to use.
module.exports = router;