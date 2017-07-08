// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Nav = require("./nav");

var Liberal = require("./liberal");
var Conservative = require("./conservative");

// Create the Main component
var Main = React.createClass({

  render: function() {

    return (

      <div className="main-container">
        <div className="container">
          {/* Navbar */}
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
                <Link className="navbar-brand" to="/main">The Realest News</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/saved">Saved Articles</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          {/*calling our child components */}

          <div className="row">
            <div className="col-xs-6">
              <Liberal />
            </div>
            <div className="col-xs-6">
              <Conservative />
              
            </div>
          </div>

          <footer>
            <hr />
            <div className="container">
             <strong>Copyright &copy; 2017 The Realest News andsegeg12313</strong>
           </div>
          </footer>
        </div>
      </div>
    );
  }
});

// Export the component to routes
module.exports = Main;