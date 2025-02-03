import React from "react";
import { useNavigate } from "react-router-dom";
import './ProdAcc.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Services = () => {
    const navigate = useNavigate();

    const products = [
        { 
            id: 1, 
            name: "Generators and Inverters", 
            description: "We repair all types of generators and inverters.", 
            image: "/images/gen1.png",
            details: "We provide expert repairs and maintenance for generators and inverters, ensuring they run efficiently for longer."
        },
        { 
            id: 2, 
            name: "Solar Panels and Consumer units", 
            description: "We install solar panels and consumer units.", 
            image: "/images/solar.jpg",
            details: "We specialize in the installation of solar panels and consumer units to promote renewable energy solutions."
        },
        { 
            id: 3, 
            name: "Water Pumps", 
            description: "We repair water pumps.", 
            image: "/images/waterpump1.jpg",
            details: "Our team provides repair and maintenance services for water pumps, ensuring smooth water flow."
        },
        { 
            id: 4, 
            name: "CCTV Cameras", 
            description: "We offer CCTV cameras installation services at affordable prices.", 
            image: "/images/cctv1.jpg",
            details: "We install and maintain CCTV cameras to enhance security for homes and businesses."
        },
        { 
            id: 5, 
            name: "Servers, Computers and Printers", 
            description: "Repair of desktop and laptop computers as well as printers and servers available.", 
            image: "/images/computer1.jpg",
            details: "We repair computers server and printers at affordable prices."
        },
        { 
            id: 6, 
            name: "Projectors and UPSs", 
            description: "Repair projectors and UPSs of all types.", 
            image: "/images/projector1.jpg",
            details: "We repair projectors of all kinds and UPSs as well."
        },
        { 
            id: 7, 
            name: "Networking", 
            description: "Installation and maintenance of network systems.", 
            image: "/images/network1.jpg",
            details: "We install and maintain networks such as Local Area Networks e.t.c"
        },
        { 
            id: 8, 
            name: "Software Engineering", 
            description: "Software development and maintenance", 
            image: "/images/software1.jpg",
            details: "We develop various softwares and carry out intergrations and maintanenance."
        },
        { 
            id: 9, 
            name: "Other services", 
            description: "House renovations, cleaning, painting and capentry", 
            image: "/images/other1.jpg",
            details: "We offer other services as well and guarantee quality output and affordable pricinngs"
        },
    ];

    return (
        <div className="products">
            <Navbar />
            <div className="products-body">
                <h1>Our Services</h1>
                <div className="products-list">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="product-card"
                            onClick={() => navigate(`/service/${product.id}`)} 
                            style={{ cursor: "pointer" }}
                        >
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
