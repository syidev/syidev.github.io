var React = require ('react');

var update = "January, 21"

var Footer = React.createClass({
    displayName: '',
    render() {
        return (
			<footer>
				<div className="container-fluid">
					<div className="row">
						<div className="hidden-xs hidden-sm col-sm-4 clearfix">
							<p className="text text-left">Copyright &copy; 2018 syidev.github.io </p>
						</div>
						<div className="col-xs-6 col-sm-8 col-md-4">
							<p className="text text-center">Powered by <a href="https://facebook.github.io/react/">React</a></p>
						</div>
						<div className="col-xs-6 col-sm-4 clearfix">
							<p className="text text-right">Last update: {update}</p>
						</div>
					</div>
				</div>
			</footer>
        );
    }
});

module.exports = Footer;