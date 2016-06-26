var React = require('react');

var Resume = React.createClass({
    displayName: '',
    render() {
        return (
            <main className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="clearfix">
                            <h2 className="text-left pull-left">Savchenko Yaroslav</h2>
                            {/*<a className="btn btn-primary pull-right" href="files/Savchenko_Yaroslav_resume.pdf">Download resume <span class="glyphicon glyphicon-save-file"></span></a>*/}
                        </div>
                        <h4>Contact information</h4>
                        <span>City: Kremenchug</span>
                        <br />
                        <span>Phone: +38 097 22 10 840</span>
                        <br />
                        <span>E-mail: force.and.fury@gmail.com</span>
                        <h3><b>Objective:</b></h3>
                        <p>Get perspective job Front-End Developer with the possibility of further growth. I
                        want to do is really "cool stuff", which will be happy to use people, and used to
                        develop the most advanced technologies.</p>
                        <h3><b>Skills:</b></h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>CMS: DLE</li>
                            <li>Gulp</li>
                            <li>Bower</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Git</li>
                        </ul>
                        <h3><b>Education:</b></h3>
                        <span>Kremenchuk Mykhailo Ostrogradskyi National University</span>
                        <br />
                        <span>“Technician of Systems Engineering” (2010-2015)</span>
                        <h4><b>Cources:</b></h4>
                        <p>IQ Hub Academy (February 2016 - May 2016)</p>
                        <h3><b>Experience:</b></h3>
                        <h6>Front-End Developer</h6>
                        <p>StroimWeb, web-studio (June 2016 - present)</p>
                        <h6>Front-End Developer</h6>
                        <p>ISV7, web-studio (November 2015 - April 2016)</p>
                        <h3><b>Languages:</b></h3>
                        <ul>
                            <li>English - technical literature reading</li>
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
});

module.exports = Resume;


