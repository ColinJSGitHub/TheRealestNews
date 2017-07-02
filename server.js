//server logic

// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');

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


app.use(require('express-session')({
    secret:'douche', resave: false, saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// This router kept out of middleware so people can access the auth routes
var authRouter = require('./app/auth/auth');
app.use('/auth', authRouter);


// Will make sure user is Auth'd before seeing other routes
app.use(function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
        return;
    }
    res.redirect('/');

});


mongoose.connect("mongodb://localhost/TheRealestNews");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});




app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

