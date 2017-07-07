// express routes

// requiring our article schema
var Article = require("../models/articleSchema");
var express = require('express');
var passport = require('passport');
var router = express.Router();


//route that saves articles to the db
router.post("/saved", function(req, res) {

	console.log('/api/saved being CALLED');
	var newArticle = new Article(req.body);
	console.log('/api/saved' + req.body);
	newArticle.save(function(err, doc) {
		if(err){
			console.log(err);
		}else{
			res.send(doc);
		}
	});
});
//route that gets saved articles from the db
router.get("/saved", function(req, res) {
	Article.find({}).exec(function(err, doc) {
		if(err){
			console.log(err);
		}else{
			res.send(doc);
		}
	});
});
//route to delete articles from db
router.delete("/saved", function(req, res) {

	console.log("THIS IS THE REQ HOMIE" + req.body);
	var paramsUrl = req.param("url");
	Article.find({url: paramsUrl}).remove().exec(function(err) {
		if(err){
			console.log(err);
		}else{
			res.send("Article Deleted");
		}
	});
});


// Any non API GET routes will be directed to our React App and handled by React Router
router.get("*", function(req, res) {
		res.sendFile(__dirname + "../public/index.html");
});

module.exports = router;

