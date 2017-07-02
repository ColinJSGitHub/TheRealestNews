var React = require("react");
var Link = require("react-router").Link;

var Nav = React.createClass({
	render: function(){
		return(
       
          
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">The Realest News</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/saved">Saved Articles</Link></li>
                </ul>
              </div>
            </div>
          </nav>
		);
	}
});

module.exports = Nav;