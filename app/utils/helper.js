var axios = require("axios");

//api key here- API Key for the News API - same for all searches
var APIKey = "020be1ac0a8b48309923b8aa41d75d75";

var helper = {

	// getDem function returns liberal news articles from our api
	getDem: function() {
		return axios.get("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=" + APIKey
			).then(function(response) {
			console.log("CNN results", response.data.articles);
			return response.data.articles;
		});
	},
	// getRep function returns conservative news articles from our api
	getRep: function() {
		return axios.get("https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=" + APIKey
			).then(function(response) {
			console.log("Breitbart results", response.data.articles);
			return response.data.articles;
		});
	},
	//this function saves articles to the db
	postArticle: function(article) {
		var newArticle = {title: article.title, image: article.urlToImage, description: article.description, url: article.url, author: article.auther, date: article.publishedAt};
		return axios.post("/api/saved", newArticle).then(function(response) {
			console.log("axios results", response.data);
			return response.data;
		});
	},
	//get saved articles from the db
	getSaved: function() {
		return axios.get("/api/saved").then(function(results){
			console.log("saved articles", results.data);
			return results.data;
		});
	},
	//function that deletes saved articles
	deleteArticle: function(title, image, description, url, author, date) {
		return axios.delete("/api/saved", {
			params: {
				"title": title,
				"image": image,
				"description": description,
				"url": url,
				"author": author,
				"date": date
			}
		}).then(function(results) {
			console.log("deleted results", results);
			return results;
		});
	},

	getFacebookLogin: function(){
		return axios.post('/auth/facebook').then(function(results){
			console.log("FB being hit sucka: ", results);
			return results;
		});
	}

};

module.exports = helper;

