import React from 'react'
import Layout from '../components/layouts/Layout'
import { useAuth } from '../context/auth'
import BannerImage from '../images/about-background-image.png'
import BannerBackground from '../images/home-banner-background.png'
import { useNavigate } from 'react-router-dom'

import { FiArrowRight } from "react-icons/fi";
import AboutH from './AboutH'
import Work from './Work'

// import "../styles/HomePageStyles.css";

const HomePage = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth()
    return (
        <Layout title={"Home"} >

            < div className="home-container" >

                <div className="home-banner-container">
                    <div className="home-bannerImage-container">
                        <img src={BannerBackground} alt="" />
                    </div>
                    <div className="home-text-section">
                        <h1 className="primary-heading">
                            Farm Fresh Veggies Delivered To Your Plate
                        </h1>
                        <p className="primary-text">
                            Eating a variety of fresh vegetables and fruits promotes good health. Packed with essential nutrients, they boost immunity, aid digestion, and support overall well-being for a vibrant life.
                        </p>
                        <button className="secondary-button" onClick={() => navigate("/shop")}>
                            Order Now <FiArrowRight />{" "}
                        </button>
                    </div>
                    <div className="home-image-section">
                        <img src={BannerImage} alt="" />
                    </div>
                </div>
            </div >
            <AboutH />
            <Work />
        </Layout>

    )
}

export default HomePage