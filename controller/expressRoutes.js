//express routes

//requiring our article schema
var Article = require("../models/articleSchema");

module.exports = function(app) {
	//route that saves articles to the db
	app.post("/api/saved", function(req, res) {
		var newArticle = new Article(req.body);
		console.log(req.body);
		newArticle.save(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				res.send(doc);
			}
		});
	});
	//route that gets saved articles from the db
	app.get("/api/saved", function(req, res) {
		Article.find({}).exec(function(err, doc) {
			if(err){
				console.log(err);
			}else{
				res.send(doc);
			}
		});
	});
	//route to delete articles from db
	app.delete("/api/saved/", function(req, res) {
		var paramsUrl = req.param("url");
		Article.find({url: url}).remove().exec(function(err) {
			if(err){
				console.log(err);
			}else{
				res.send("Article Deleted");
			}
		});
	});


	// Any non API GET routes will be directed to our React App and handled by React Router
	app.get("*", function(req, res) {
 		res.sendFile(__dirname + "../public/index.html");
	});

};