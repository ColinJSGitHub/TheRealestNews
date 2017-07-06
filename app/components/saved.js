//saved articles component

var React = require("react");

var helper = require("../utils/helper");

var Saved = React.createClass({

	getInitialState: function() {
		return { savedArticles: [] };
	},

	componentDidMount: function() {
		helper.getSaved().then(function(article) {
			this.setState({savedArticles: article});
			console.log("saved article", article);
		}.bind(this));
	},

	handleClick: function(chosenArticle) {
		console.log(chosenArticle);

		helper.deleteArticle(chosenArticle.title, chosenArticle.urlToImage, chosenArticle.description, chosenArticle.url, chosenArticle.author, chosenArticle.publishedAt)
		.then(function() {
			helper.getSaved().then(function(remainingArticles) {
				this.setState({savedArticles: remainingArticles});
				console.log("articles that havent been deleted", remainingArticles);
			}.bind(this));
		}.bind(this));
	},

	render: function() {
		var articlesSaved = this.state.savedArticles.map(function(article, index) {
			return(
	            <div>
		          <li className="list-group-item">
		            <h3>
		              <span>
		                <b>{article.title}</b>
		              </span>
		            </h3>
		            <img src={article.urlToImage} alt="News Image" className="newsImage"/>
		            <span className="btn-group pull-right">
		                <a href={article.url} rel="noopener noreferrer" target="_blank">
		                  <button className="btn btn-default ">View Article</button>
		                </a>
		            	{/*deletes articles from the db */}
		                <button className="btn btn-warning" onClick={() => this.handleClick(article)}>Delete</button>
		              </span>
		            <p>Author: {article.author} </p>
		            <p>Date Published: {article.publishedAt}</p>
		          </li>
		        </div>
			);
		}.bind(this));
		
		return(
			<div className="main-container">
		        <div className="row">
		          <div className="col-lg-12">
		            <div className="panel panel-primary">
		              <div className="panel-heading">
		                <h1 className="panel-title">
		                  <strong>
		                    <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
		                </h1>
		              </div>
		              <div className="panel-body">
		                <ul className="list-group">
		                	{articlesSaved}
		                </ul>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
		);
	}
});

module.exports = Saved;