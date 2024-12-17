import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-div">
            <p>&copy; Greatlink Company Limited</p>
            <div className="social-icons">
                <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div className="footer-links">
                <Link to="/contact">Contact Us</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
        </div>
    );
}

export default Footer;

