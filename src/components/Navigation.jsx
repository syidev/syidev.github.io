var React = require('react');

var Navigation = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div className="container-fluid">
					{/* Brand and toggle get grouped for better mobile display */}
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">SYIdev</a>
					</div>
					{/*Collect the nav links, forms, and other content for toggling*/}
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li>
								{/*<a href="/resume.html"><span className="glyphicon glyphicon-file" aria-hidden="true"></span>My resume</a>*/}
							</li>
							<li>
								{/*<a href="/hardware.html"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span>Hardware</a>*/}
							</li>
							<li>
								<a href="#"></a>
							</li>
						</ul>
					</div>{/*/.navbar-collapse */}
				</div>{/*/.container */}
			</nav>
		);
	}
});

module.exports = Navigation;