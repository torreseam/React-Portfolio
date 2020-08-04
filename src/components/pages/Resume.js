import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Resume = () => (
    <div>
        <h1 className="resume-list">Resume</h1>

        <div className="resume-link">
            <a href="https://docs.google.com/document/d/1dCIAW3WCw3a6JwPqb7JRYAQbPwqKV5gjhHJtW7Q1sEc/edit?usp=sharing" target="blank" alt="Resume">Download my Resume</a>
        </div>

        <div className="resume-main">
            <div>
                <h4 className="">Skills</h4>
            </div>

            <div>
                <p>Develop best practice solutions by facilitating meetings with Technology and Business Leaders to develop needs and requirements. Consult with business managers to develop project scope, translate and understand business principles and technical requirements by developing solutions to existing problems/issues, compliance and adherence to principles
Key on-site engineer and team member of Data Center Migration and decommissioning project team. Responsible for equipment installation, testing, troubleshooting of operating systems including hardware & software, provide technical support as needed, project management, change management requests, server moves and cutovers, physical removal of equipment and proper disposal of company assets.</p>
            </div>

            <div>
                <h5 className="header-space">Install, test, and terminate data/telecommunications cabling, including Cat6e and Fiber media to United Airlines standards.
                Install equipment cabinets to house network data equipment, and power circuit.
                Monitor and properly address facility alarms such as: equipment alarms, overheating, circuit overloads, etc.
                Establish and maintain written, verbal, and online communications channels with regional management to ensure they are always up to date for their respective facility.</h5>
            </div>

            <div>
                <h5 className="header-space">Technology and DataBase Skills </h5>
            </div>
            <div>
                <ul>HTML/CSS</ul>
                <ul>JavaScript/jQuery</ul>
                <ul>Handlebars</ul>
                <ul>Local Storage, Session Storage, IndexedDB</ul>
                <ul>React.js</ul>
                <ul>MySQL,NoSQL, Sequelize</ul>
                <ul>MongoDB, Mongoose</ul>
            </div>

            <div>
                <h5 className="header-space">Development</h5>
            </div>

            <div>
                <ul>User Authentication</ul>
                <ul>Progressive Web Applications (PWAs)</ul>
                <ul>MERN Stack (MongoDB, Express.js, React.js, Node.js)</ul>
            </div>

        </div>


    </div>
);

export default Resume;