var React = require ("react");

var  Project = React.createClass({
    displayName: '',
    render() {
		const isPath = !!this.props.path;
        return (
			<div className="row">
				<div className="col-md-7">
                    {isPath ? (
                        <a href={this.props.path}>
                            <img className="img-responsive" src={this.props.img} alt="" />
                        </a>
                    ) : (
                        <img className="img-responsive" src={this.props.img} alt="" />
                    )}
				</div>
				<div className="col-md-5">
					<h3>{this.props.name}</h3>
					<h6>{this.props.tecnology}</h6>
					<p>{this.props.description}</p>
					<a className="btn btn-primary" href={this.props.git}>View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
				</div>
			</div>
        );
    }
});

module.exports = Project;