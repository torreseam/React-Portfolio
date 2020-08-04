import React from "react";
import coverImage from '../../assets/cover/cover-image-1.jpg';
import userImage from '../../assets/cover/linkedin.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../src/App.css';


function About() {
    return (
        <section className="">
            <h1 id="about">Edgar Torres</h1>
            <img src={coverImage} className="hero" alt="cover" />

            <div className="row">

                <div className="col-4 ip-picture">
                    <img src={userImage} className="linkedin-picture" alt="no name" />
                </div>

                <div className="col-7 ip-desc">
                    <h4>About Edgar</h4>
                    <p>
                        Experience Information Technology System Engineer with a demonstrated history of working in the airline/aviation industry. Skilled in LAN Rooms-WAN & MAN, Windows, UPS and automation systems, direct Technical Support, Testing, System Management and Operating Systems. 
                        Strong Information Technology background professional with a proven track record of delivering projects on time. Quick learner known for follow-through, determination and communication skills. 
                        Self-motivated team player who works well individually or as part of a team.
                    </p>
                </div>
            </div>

        </section>
    )
};

export default About;