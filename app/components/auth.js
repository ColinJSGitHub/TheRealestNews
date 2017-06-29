var React = require("react");

var Auth = React.createClass({

	render: function(){
		return (

			<div>
				<h3 class="textAlign">To see DA NEWS from shitty political sites, we need you to login first</h3>

				    <form method="POST" action="/auth/twitter">
				    	<div class="social-wrap c">
							<button type="submit" class="twitter btnSocial">Twitter</button>
						</div>
					</form>

					<form method="POST" action="/auth/facebook">
						<div class="social-wrap c">
							<button type="submit" class="facebook btnSocial">Facebook</button>
						</div>
					</form>
			</div>
		);
	}
});

module.exports = Auth;
