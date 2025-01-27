import React, {useState} from "react";
import './ContactUs.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== '' && email !== ''){
      const url = "http://localhost:5000/contact";
      const headers = {
        Accept:'application/json',
        'Content-Type':'application/json', 
      }
      const userData = {name, email, message};
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(userData),
      })
      .then((response) => response.json())
      .then((response) => {
        if (response.error){
          setError(response.error);
        }else{
          setMsg(response.message);
          setTimeout(() => {
            alert('Thank you! We have received your information!');
            navigate("/contact");
          }, 2000);
        }
      }).catch((err) => setError(err.message));
    }else{
      setError("All fields required!");
    }
  };


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
          <p><a href="mailto:info@greatlinkcompany.com">greatlinkcompany7@gmail.com</a></p>
        </div>
        <div className="contact-card">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p><a href="tel:+254728372916">(+254) 7283-729-16</a></p>
          <p><a href="tel:+254733415835">(+254) 7334-158-35</a></p>
        </div>
        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Location</h3>
          <p>Vedic House, 3rd Floor,</p>
          <p>Mama Ngina Street,</p>
          <p>P.O. BOX 55219-00200, Nairobi.</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form>
          <input
           type="text"
           name="name"
           placeholder="Your Name"
           value={name}
           onChange={(e) => setName(e.target.value)}
           required />
          <input
           type="email"
           name="email"
           placeholder="Your Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          required />
          <textarea
           name="message"
           rows="5"
           placeholder="Your Message"
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           ></textarea>
          <button
           type="submit"
           onClick={handleSubmit}
           >Send Message</button>
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
