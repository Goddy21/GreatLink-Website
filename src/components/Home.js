import React from "react";
import './Home.css';
import Navbar from "./Navbar"; // Make sure Navbar component is correctly imported
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {   
    return (
        <div className="home">
            <div className="body">
                {/* Hero Section with Navbar inside */}
                <div className="hero">
                    {/* Navbar */}
                    <Navbar />  {/* Navbar will now be part of the hero section */}

                    <h1>Welcome to Greatlink Company Limited</h1>
                    <p>Your One-Stop Solution for Computer and Engineering Services</p>
                    <Link className="get_started" to='/sign_up'>
                        Get Started
                    </Link>
                </div>

                {/* About Us Section */}
                <div className="about-us">
                    <h2>Who We Are</h2>
                    <p>
                        At Greatlink Company Limited, we pride ourselves in delivering 
                        high-quality **Computer Hardware Repairs**, **Electrical and Electronics Engineering Services**, 
                        **Software Development**, and much more. With experienced professionals, we ensure excellence 
                        and innovation in every project.
                    </p>
                </div>

                {/* Services Section */}
                <div className="services">
                    <h2>Our Services</h2>
                    <div className="service-cards">
                        <div className="service-card">
                            <img src="/images/hardware.jpg" alt="Hardware Repair" />
                            <h3>Computer Hardware Repair</h3>
                            <p>We fix hardware issues and ensure your devices are running perfectly.</p>
                        </div>
                        <div className="service-card">
                            <img src="/images/software.jpg" alt="Software Development" />
                            <h3>Software Development</h3>
                            <p>Custom software solutions tailored to your business needs.</p>
                        </div>
                        <div className="service-card">
                            <img src="/images/networking.jpg" alt="Networking" />
                            <h3>Networking Services</h3>
                            <p>Reliable network installation, maintenance, and support services.</p>
                        </div>
                        <div className="service-card">
                            <img src="/images/engineering.jpg" alt="Electrical Engineering" />
                            <h3>Electrical & Electronics Engineering</h3>
                            <p>Innovative and professional engineering services for your projects.</p>
                        </div>
                        <div className="service-card">
                            <img src="/images/maintenance.jpg" alt="Maintenance" />
                            <h3>System Maintenance</h3>
                            <p>Regular maintenance to optimize system performance.</p>
                        </div>
                        <div className="service-card">
                            <img src="/images/supplies.jpg" alt="Supplies" />
                            <h3>Supplies</h3>
                            <p>We supply quality computer hardware, software, and electronic components.</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="choose-us">
                    <h2>Why Choose Us?</h2>
                    <ul className="choose-us-list">
                        <li>✔ Skilled and Experienced Professionals</li>
                        <li>✔ Cutting-Edge Technology Solutions</li>
                        <li>✔ Affordable Pricing</li>
                        <li>✔ Timely Project Delivery</li>
                        <li>✔ Exceptional Customer Support</li>
                    </ul>
                </div>

                {/* Call to Action Section */}
                <div className="call-to-action">
                    <h2>Ready to Work With Us?</h2>
                    <p>Contact us today to get the best solutions for your business or personal needs.</p>
                    <br />
                    <Link className="contact-btn" to='/contact'>
                        Contact Us
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
