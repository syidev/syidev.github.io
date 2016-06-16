var React = require ('react');

var Footer = React.createClass({
    displayName: '',
    render() {
        return (
			<footer>
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-4">
							<p className="text pull-left">Copyright &copy; 2016 syidev.github.io </p>
						</div>
						<div className="col-sm-4">
							<p className="text text-center">Powered by <a href="https://facebook.github.io/react/">React</a></p>
						</div>
						<div className="col-sm-4">
							<p className="text pull-right">Last update: {this.props.update}</p>
						</div>
					</div>
				</div>
			</footer>
        );
    }
});

module.exports = Footer;