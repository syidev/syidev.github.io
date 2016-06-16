var React = require('react');

var Heading = React.createClass({
    displayName: '',
    render() {
        return (
            <div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">Projects <span className="label">{this.props.projects}</span></h1>
				</div>
			</div>
        );
    }
});

module.exports = Heading;

		