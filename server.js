//server logic

// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//serve static default content
app.use(express.static("./public"));

//passing our express routes the express function
require("./models/articleSchema")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});