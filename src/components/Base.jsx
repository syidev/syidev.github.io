var React = require ('react');

var Navigation = require ('./Navigation.jsx');
var Footer = require ('./Footer.jsx');
var Page = require ('./Page.jsx');
var Resume = require ('./Resume.jsx');


var Base = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation />
                {this.props.children}
                <Footer />
            </div>
        )
    }
});

module.exports = Base;