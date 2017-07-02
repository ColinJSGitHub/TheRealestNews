var React = require("react");

var helper = require("../utils/helper");
var Nav = require("./nav");

var Auth = React.createClass({

	doFacebook: function(){
		console.log('doFacebook() Called.')

		helper.getFacebookLogin().then(function(){
			console.log("getFacebookLogin() Returned")
		});

	},

	render: function(){
		return (

			

			<div>
				<Nav />
				<h3 className="textAlign">To see DA NEWS from shitty political sites, we need you to login first</h3>

				<form method="POST" action="/auth/twitter">
			    	<div className="social-wrap c">
						<button className="twitter btnSocial">Twitter</button>
					</div>

				</form>

				<form method="POST" action="/auth/facebook">

					<div className="social-wrap c">
						<button className="facebook btnSocial">Facebook</button>
					</div>

				</form>
			</div>
		);
	}
});

module.exports = Auth;
