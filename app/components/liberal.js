//liberal news component

var React = require("react");

var helper = require("../utils/helper");

var Liberal = React.createClass({

  getInitialState: function() {
    return { demArticles: "" };
  },

  handleClick: function(chosenArticle) {
  	console.log("clicked");
  	console.log(chosenArticle);

  	helper.postArticle(//chosenArticle.data).then(function() {
  		console.log("article saved!");
  	});
  },

  // When this component mounts, get articles from cnn api
  componentDidMount: function() {
    helper.getDem().then(function(articleData) {
      this.setState({ demArticles: articleData});
      {console.log("CNN Results", articleData)}
    }.bind(this));
  },

  render: function() {

  	return this.state.demArticles.map(function(article, index) {

	  	return (
	  		<div className="main-container">
		        <div className="row">
		          <div className="col-lg-12">
		            <div className="panel panel-primary">
		              <div className="panel-heading">
		                <h1 className="panel-title">
		                  <strong>
		                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Liberal News</strong>
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
					            	{/*saves articles to database */}
					                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
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
	});
  }

});

module.exports = Liberal;