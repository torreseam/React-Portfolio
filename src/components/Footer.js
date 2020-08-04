import React from "react";
// import '../Navigation/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => (
    <>
        <div className="footer">
            <a href="https://github.com/torreseam" target="_blank" rel="noopener noreferrer">
                <img alt="Github" className="footer-img" src={require("../assets/cover/github-icon.png")} />
            </a>

            <a href="https://www.linkedin.com/in/edgar-torres-3349203a/" target="_blank" rel="noopener noreferrer">
                <img alt="LinkedIn" className="footer-img" src={require("../assets/cover/linkedin-circle.png")} />
            </a>

            {/* <a href="https://twitter.com/IPetrovicova" target="_blank" rel="noopener noreferrer"> */}
                {/* <img alt="Twitter" className="footer-img" src={require("../assets/icons/twitter3.png")} /> */}
            {/* </a> */}
        </div>
    </>
);

export default Footer;