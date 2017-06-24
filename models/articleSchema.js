var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  url: {
  	type: String
  },
  author: {
  	type: String
  },
  date: {
  	type: Date
  }

});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;