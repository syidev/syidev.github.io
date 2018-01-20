var React = require('react');

var Tabs = React.createClass({
    displayName: '',
    render() {
        return (
            <ul className="nav nav-tabs" role="tablist">
				<li role="presentation" className="active">
					<a href="#html-css" aria-controls="html-css" role="tab" data-toggle="tab">HTML/CSS 
						<span className="badge">{this.props.markup}</span>
					</a>
				</li>
				<li role="presentation">
					<a href="#javascript" aria-controls="javascript" role="tab" data-toggle="tab">JS, jQuery 
						<span className="badge">{this.props.javascript}</span>
					</a>
				</li>
				<li role="presentation">
					<a href="#react" aria-controls="react" role="tab" data-toggle="tab">React 
						<span className="badge">{this.props.react}</span>
					</a>
				</li>
				<li role="presentation">
					<a href="#csharp" aria-controls="csharp" role="tab" data-toggle="tab">C#/.NET 
						<span className="badge">{this.props.dotnet}</span>
					</a>
				</li>
			</ul>
        );
    }
});

module.exports = Tabs;