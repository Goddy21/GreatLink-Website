import React from "react";
import './ProdAcc.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Accessories = () => {
    const accessories = [
        { id: 1, name: "Cables and Wires", description: "Top-quality cables for all your electrical needs." },
        { id: 2, name: "Batteries", description: "Reliable and long-lasting batteries for backup solutions." },
        { id: 3, name: "Connectors", description: "High-performance connectors for seamless integration." },
        { id: 4, name: "Surge Protectors", description: "Protect your devices from voltage surges." },
        { id: 5, name: "Lighting Accessories", description: "A variety of lighting fixtures and parts." },
    ];

    return (
        <div className="accessories">
            <Navbar />
            <div className="accessories-body">
                <h1>Our Accessories</h1>
                <div className="accessories-list">
                    {accessories.map((accessory) => (
                        <div key={accessory.id} className="accessory-card">
                            <h3>{accessory.name}</h3>
                            <p>{accessory.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Accessories;
