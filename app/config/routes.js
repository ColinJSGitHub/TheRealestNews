// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/main");
var Saved = require("../components/saved");
var Auth = require("../components/auth")

module.exports = (
    // High level component is the Router component.
    <Router history={browserHistory}>

    	<Route path="/" component={Auth} />


        <Route path="main" component={Main}>
            <Route path="saved" component={Saved} />
            <IndexRoute component={Main} />
        </Route>
    </Router>
);