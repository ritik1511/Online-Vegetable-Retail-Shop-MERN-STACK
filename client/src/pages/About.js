import React from "react";
import Layout from "./../components/layouts/Layout";

const About = () => {
    return (
        <Layout title={"About us - Ecommer app"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-5">
                    <p className="text-justify mt-5">

                        <h3>About US</h3>

                        Welcome to VeggieHub! We are your trusted partner in bringing the freshest and most flavorful produce right to your doorstep. Our mission is to make healthy eating convenient, accessible, and enjoyable for everyone.

                        <br /><h3>Our Story</h3>

                        Founded in 2023,  was born out of a passion for wholesome nutrition and a deep appreciation for the bounties of nature. Our journey began with a simple belief: that everyone should have easy access to farm-fresh vegetables and fruits that nurture both the body and the soul.

                        <br /><h3>What We Do</h3>

                        At VeggieHub, we've created a seamless online platform that connects local farmers and growers directly to your kitchen. We handpick the finest selection of seasonal produce, ensuring that each item is packed with flavor, nutrients, and the goodness that only comes from the earth.

                        <br /><h3>Why Choose Us?</h3>

                        Farm-Fresh Delight: We partner with local farmers who share our commitment to sustainable and organic practices. This means you receive produce that is not only delicious but also produced with care for the environment.

                        Convenience Redefined: Say goodbye to long supermarket queues and produce that sits on shelves for days. With just a few clicks, you can have a curated selection of vegetables and fruits delivered to your doorstep, saving you time and effort.

                        Seasonal Variety: Eating in harmony with nature is at the core of our philosophy. We offer a rotating array of seasonal produce, introducing you to new flavors and promoting a diverse and well-rounded diet.

                        Health and Wellness: A diet rich in fresh fruits and vegetables is the cornerstone of a healthy lifestyle. By making these essential foods easily accessible, we empower you to take charge of your well-being.

                        Community Support: When you choose VeggieHub, you're not just getting top-quality produce. You're also supporting local farmers and fostering a sense of community that extends from the fields to your table.
                    </p>
                </div>

            </div>
        </Layout>
    );
};

export default About;