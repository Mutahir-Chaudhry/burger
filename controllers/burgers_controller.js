var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/index");
});

//Route to homepage displaying all burgers
router.get("/index", function(req,res){
  burger.all(function(data){
    var hbsObject = { burgers: data };
    res.render("index", hbsObject)
  });
});

//Route to create a burger
router.post("/burger/create", function(req,res){
  burger.create(req.body.burger_name, function(){
    res.redirect("/index");
  });
});

//Route to devour a burger
router.post("/burger/eat/:id", function(req,res){
  burger.update(req.params.id, function(){
    res.redirect("/index")
  });
});

// Export routes for server.js to use.
module.exports = router;