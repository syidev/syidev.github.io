var React = require('react');
var ReactDOM = require('react-dom');

var Page = require('./components/Page.jsx');
var Navigation = require('./components/Navigation.jsx');
var Footer = require('./components/Footer.jsx');


ReactDOM.render(<Page />, document.getElementById('page'));
ReactDOM.render(<Navigation />, document.getElementById('navigation'));
ReactDOM.render(<Footer update="June, 18" />, document.getElementById('footer'));