import React from "react";
import './ContactUs.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We are here to assist you with all your inquiries.</p>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-card">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p><a href="mailto:info@greatlinkcompany.com">info@greatlinkcompany.com</a></p>
        </div>
        <div className="contact-card">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Location</h3>
          <p>123 Main Street, Nairobi, Kenya</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <h2>Find Us Here</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBR3E1UJ6IHkFTgonnGrT_JHrhXS8nAPaw&q=Nairobi,Kenya"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
