//saved articles component

var React = require("react");

var helper = require("../utils/helper");

var Saved = React.createClass({

	getInitialState: function() {
		return {savedArticles: ""};
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

	renderEmpty: function() {
		return(
			<li className="list-group-item">
				<h3>
					<span>
						<em>Saved articles will appear here.</em>
					</span>
				</h3>
				<h3>
					<span>
						<em>Go back to the homepage and browse any articles you would like to save.</em>
					</span>
				</h3>
			</li>
		);
	},

	renderArticles: function() {
		return this.state.savedArticles.map(function(article, index) {
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
				                <div key={index}>
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
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
		        </div>
			);
		}.bind(this));
	},

	render: function() {
		//if we dont have any articles saved call our render empty function
		if(!this.state.savedArticles){
			return this.renderEmpty();
		}else{
			//otherwise render our saved articles
			return this.renderArticles();
		}
	}
});

module.exports = Saved;

