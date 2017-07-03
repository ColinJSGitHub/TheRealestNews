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
				<div className="main-container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h3 className="textAlign">To gain wisdom and become enlightened login with Facebook or Twitter</h3>

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
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Auth;
