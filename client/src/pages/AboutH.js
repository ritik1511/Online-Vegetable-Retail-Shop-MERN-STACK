import React from "react";
import AboutBackground from "../images/about-background.png";

// import AboutBackgroundImage from "../images/about-background-image.png";
import AboutBackgroundImage from "../images/test5.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

const AboutH = () => {
    const navigate = useNavigate()
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-container">
                <img id="i1" src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About Us</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    What Makes Our Vegetables Special..???
                    The Veggie Heaven Boasts An Extensive Database Of Information About Various Vegetables From All Over India. From Common Staples Like Potatoes, Tomatoes And Chillies To Exotic Treasures Like Zucchini And Baby Corn.

                    Every Vegetable Has Its Own Place In Our Wide Digital Garden!!
                </p>
                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                    facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button" onClick={() => navigate("/about")}>Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutH;