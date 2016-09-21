var React = require('react');

var Tabs = require('./Tabs.jsx');
var Heading = require('./Heading.jsx');
var Project = require('./Project.jsx');

var Page = React.createClass({
	componentDidMount: function() {
		document.title = "syidev";
	},
	render: function(){
		return (

		<main className="container-fluid">

			{/* Page Heading */}
			<Heading projects="12" />

			{/* Nav tabs */}
			<Tabs markup="5" javascript="3" react="1" angular="2" node="1" dotnet="3" />
			<br />

			{/* Tab panes */}
			<div className="tab-content">

				{/* HTML/CSS */}
				<div role="tabpanel" className="tab-pane active" id="html-css">
					<Project path="https://syidev.github.io/Caerus" 
							 img="img/caerus.png" 
							 name="Caerus" 
							 tecnology="HTML5, CSS3, Bootstrap 3"
							 description="Responsive template"
							 git="https://github.com/syidev/Caerus" />
					<hr />
					<Project path="https://syidev.github.io/Achlys" 
							 img="img/achlys.png" 
							 name="Achlys" 
							 tecnology="HTML5, CSS3, Bootstrap 3"
							 description="Template"
							 git="https://github.com/syidev/Achlys" />
					<hr />
					<Project path="https://syidev.github.io/Eirene" 
							 img="img/eirene.png" 
							 name="Eirene" 
							 tecnology="HTML5, CSS3, Bootstrap 3"
							 description="Template"
							 git="https://github.com/syidev/Eirene" />
					<hr />
					<Project path="https://syidev.github.io/Photo" 
							 img="img/photo.png" 
							 name="Photo" 
							 tecnology="HTML5, CSS3, SCSS, Bootstrap 3, Gulp, Bower"
							 description="Template"
							 git="https://github.com/syidev/Photo" />
					<hr />
					<Project path="https://syidev.github.io/test" 
							 img="img/test-layout.png" 
							 name="Test" 
							 tecnology="HTML5, CSS3, JavaScript, jQuery"
							 description="Responsive template"
							 git="https://github.com/syidev/test" />
				</div>

				{/* JavaScript */}

				<div role="tabpanel" className="tab-pane" id="javascript">
					<Project path="https://syidev.github.io/Contact-list" 
							 img="img/contact-list.png" 
							 name="Contact list" 
							 tecnology="JavaScript, HTML5, CSS3, Bootstrap 3"
							 description="Contact list with simple validation"
							 git="https://github.com/syidev/Contact-list" />
					<hr />
					<Project path="https://syidev.github.io/Arithmetic-tester" 
							 img="img/arithmetic-tester.png" 
							 name="Arithmetic tester" 
							 tecnology="JavaScript, HTML5, CSS3, Bootstrap 3"
							 description="The app in JavaScript, to test knowledge of elementary arithmetic."
							 git="https://github.com/syidev/Arithmetic-tester" />
					<hr />
					<Project path="https://syidev.github.io/test/locationmanager.html" 
							 img="img/test-js.png" 
							 name="Location manager" 
							 tecnology="JavaScript, jQuery, HTML5, CSS3, Bootstrap 3"
							 description="Location manager"
							 git="https://github.com/syidev/test" />
				</div>

				{/* React */}
				<div role="tabpanel" className="tab-pane" id="react">
					<Project path="https://syidev.github.io/Exchange-Rates"
							 img="img/er.png"
							 name="Exchange-Rates"
							 tecnology="React, window.fetch polyfill, PrivatBank API"
							 description="Exchange-Rates"
							 git="https://github.com/syidev/Exchange-Rates" />
				</div>

				{/* AngularJS */}
				<div role="tabpanel" className="tab-pane" id="angularjs">
					<Project path="" 
							 img="img/puzzle-app.png" 
							 name="Puzzle App" 
							 tecnology="Angular 2, TypeScript" 
							 description="Game" git="https://github.com/syidev/Puzzle-App" />
				<hr />
					<Project path="" 
							 img="img/input-conformation.png" 
							 name="Input Confirmation" 
							 tecnology="Angular 2, TypeScript" 
							 description="Input Confirmation" git="https://github.com/syidev/Input-Confirmation" />
				</div>

				{/* Node.js */}
				<div role="tabpanel" className="tab-pane" id="nodejs">
					<Project path="http://nodejs-syidev.rhcloud.com" 
							 img="img/shopping_cart.png" 
							 name="Shopping Cart (in progress)" 
							 tecnology="Angular 2, TypeScript"
							 description="Shop"
							 git="" />
				</div>

				{/* C#/.NET */}
				<div role="tabpanel" className="tab-pane" id="csharp">
					<Project path="" 
							 img="img/arrays.png" 
							 name="Arrays" 
							 tecnology="C#, Visual Studio 2015"
							 description="Console application to generate and sort two-dimensional array"
							 git="https://github.com/syidev/Calculator" />
					<hr />
					<Project path="" 
							 img="img/calculator.png" 
							 name="Calculator" 
							 tecnology="C#, WPF, Visual Studio 2015"
							 description="Calculator"
							 git="https://github.com/syidev/Shopping-Cart" />
					<hr />
					<Project path="" 
							 img="img/blackjack.png" 
							 name="Blackjack" 
							 tecnology="C#, Visual Studio 2015"
							 description="Game"
							 git="https://github.com/syidev/Blackjack" />
				</div>
			</div>
		</main>
		)
	}
});

module.exports = Page;