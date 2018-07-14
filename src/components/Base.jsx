const React = require ('react');

const Navigation = require ('./Navigation.jsx');
const Footer = require ('./Footer.jsx');
const Page = require ('./Page.jsx');
const Resume = require ('./Resume.jsx');


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