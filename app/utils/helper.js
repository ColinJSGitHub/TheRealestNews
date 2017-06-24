var axios = require("axios");

//api key here- API Key for the News API - same for all searches
var APIKey = "020be1ac0a8b48309923b8aa41d75d75";

var helper = {

	// getDem function returns 
	getDem: function() {
		return axios.get("https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=" + APIKey
			
		).then(function(response) {
			console.log("CNN results", response.data.articles);
			return response.data.articles;
		});
	}

	getRep: function() {
		return axios.get("https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=" + APIKey
			
		).then(function(response) {
			console.log("Breitbart results", response.data.articles);
			return response.data.articles;
		});
	},
	//this function is relient on the db schema!
	postArticle: function() {
		var newArticle = {}
		return axios.post("/api/saved", newArticle).then(function(response) {
			console.log("axios results", response.data._id);
			return response.data._id;
		});
	},

}

module.exports = helper;

