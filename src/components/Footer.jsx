const React = require ('react');

const update = "July 14, 2018 ";

const Footer = React.createClass({
    displayName: '',
    render() {
        return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="hidden-xs hidden-sm col-sm-6 clearfix">
							<p className="text text-left">Copyright &copy; syidev.github.io </p>
						</div>
						<div className="col-xs-12 col-sm-6 clearfix">
							<p className="text text-right">Last update: {update}</p>
						</div>
					</div>
				</div>
			</footer>
        );
    }
});

module.exports = Footer;