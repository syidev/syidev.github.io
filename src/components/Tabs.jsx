var React = require('react');

var Tabs = React.createClass({
    displayName: '',
    render() {
        return (
            <ul className="nav nav-tabs" role="tablist">
				<li role="presentation" className="active"><a href="#html-css" aria-controls="html-css" role="tab" data-toggle="tab">HTML/CSS <span className="badge">{this.props.markup}</span></a></li>
				<li role="presentation"><a href="#javascript" aria-controls="javascript" role="tab" data-toggle="tab">JavaScript <span className="badge">{this.props.javascript}</span></a></li>
				<li role="presentation"><a href="#react" aria-controls="react" role="tab" data-toggle="tab">React <span className="badge">{this.props.react}</span></a></li>
				<li role="presentation"><a href="#angularjs" aria-controls="angularjs" role="tab" data-toggle="tab">AngularJS <span className="badge">{this.props.angular}</span></a></li>
				<li role="presentation"><a href="#nodejs" aria-controls="nodejs" role="tab" data-toggle="tab">Node.js <span className="badge">{this.props.node}</span></a></li>
				<li role="presentation"><a href="#csharp" aria-controls="csharp" role="tab" data-toggle="tab">C#/.NET <span className="badge">{this.props.dotnet}</span></a></li>
			</ul>
        );
    }
});

module.exports = Tabs;