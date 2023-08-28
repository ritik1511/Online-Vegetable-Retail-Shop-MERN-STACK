import React from "react";
import PickMeals from "../images/pick-meals-image.png";
import ChooseMeals from "../images/choose-image.png";
import DeliveryMeals from "../images/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "What's Cooking Today?",
            text: "You decide what you are craving today and we will deliver your fruits or veggies.",
        },
        {
            image: ChooseMeals,
            title: "Choose From Various Categories",
            text: "We have various categories to choose from.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Experience lightning-fast delivery! Our efficient service ensures your package arrives swiftly and securely, meeting your deadlines with precision.",
        },
    ];
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">

                    Indulge in convenience with our doorstep delivery of the freshest fruits and vegetables. Handpicked and delivered with care, we bring the farmer's market to you, ensuring your family enjoys nature's best while you stay safe at home. Freshness and health, now just a doorstep away.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;