var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Base = require('./components/Base.jsx');
var Resume = require('./components/Resume.jsx');
var Page = require('./components/Page.jsx');


var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Base} >
        	<IndexRoute component={Page} />
        	<Route path="resume" component={Resume} />
        </Route>
    </Router>     
);

module.exports = Routes;