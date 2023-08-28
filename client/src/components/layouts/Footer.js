import React from "react";
import Logo from "../../images/logo.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                    {/* <h6>All Rights Reserved &copy;</h6> */}
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
            <div className="mt-4"><h6>All Rights Reserved &copy;<br />
                VeggieHub</h6> </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Qualtiy</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>244-5333-7783</span>
                    <span>hello@VeggieHub.com</span>
                    <span>press@VeggieHub.com</span>
                    <span>contact@VeggieHub.com</span>
                </div>
                {/* <Link  > */}
                <div className="footer-section-columns">

                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>

                </div>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Footer;