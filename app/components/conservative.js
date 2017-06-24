//conservative news component

var React = require("react");

var helper = require("../utils/helper");

var Conservative = React.createClass({

  getInitialState: function() {
    return { repArticles: "" };
  },

  handleClick: function(chosenArticle) {
  	console.log("clicked");
  	console.log(chosenArticle);

  	helper.postArticle(//chosenArticle.data).then(function() {
  		console.log("article saved!");
  	});
  },

  // When this component mounts, get articles from breitbart api
  componentDidMount: function() {
  	// the "articleData" is the returned information from the getRep function in helper.js; should be returning the response.data.articles array of 10 articles.
    helper.getRep().then(function(articleData) {
      this.setState({ repArticles: articleData});
      {console.log("Breitbart Results", articleData)}
    }.bind(this));
  },

  render: function() {

  	return this.state.repArticles.map(function(article, index) {

	  	return (
	  		<div className="main-container">
		        <div className="row">
		          <div className="col-lg-12">
		            <div className="panel panel-primary">
		              <div className="panel-heading">
		                <h1 className="panel-title">
		                  <strong>
		                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Conservative News</strong>
		                </h1>
		              </div>
		              <div className="panel-body">
		                <ul className="list-group">
		                	{/*div key = {index} refers to the mapped index position of repArticles */}
					        <div key={index}>
					          <li className="list-group-item">
					            <h3>
					              <span>
					              	{/*article.title is pulling the index object (in this case an article from the array of 10 articles), then the title value. Em is italicized, b is bold */}
					                <b>{article.title}</b>
					              </span>
					            </h3>
					        {/*pulls the image source from the article in question; remember JSX uses className, not class. className newsImage is the css class we will use for styling */}
					            <img src={article.urlToImage} alt="News Image" className="newsImage"/>
					            <h4>
					            	<span>
					            		<em>{article.description}</em>
					            	</span>
					            </h4>

					            <span className="btn-group pull-right">
					                <a href={article.url} rel="noopener noreferrer" target="_blank">
					                  <button className="btn btn-default ">View Article</button>
					                </a>
					            	{/* saves articles to database */}
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
	  	)
	})
  }

})

module.exports = Conservative;