// Import MySQL connection.
var connection = require("./connection.js");

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Object for all our SQL statement functions.
var orm = {
    all: function(cb) {
      var queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(burger_name, cb) {
      var queryString = "INSERT INTO burgers SET ?;";
      connection.query(queryString, {
        burger_name: burger_name,
        devoured: false,
      }, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    update: function(burgerID, cb) {
      var queryString = "UPDATE burgers SET ? WHERE ?;";
      connection.query(queryString,[{devoured:true}, {id:burgerID}], function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };

// Export the orm object for the model (cat.js).
module.exports = orm;
