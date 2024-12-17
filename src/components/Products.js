import React from "react";
import './ProdAcc.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Products = () => {
    const products = [
        { id: 1, name: "Generators", description: "High-quality generators for power backup solutions." },
        { id: 2, name: "Solar Panels", description: "Durable and efficient solar energy panels." },
        { id: 3, name: "Water Pumps", description: "Reliable water pumping systems for homes and businesses." },
        { id: 4, name: "CCTV Cameras", description: "State-of-the-art security cameras for surveillance." },
        { id: 5, name: "Inverters", description: "Efficient inverters for power storage and management." },
    ];

    return (
        <div className="products">
            <Navbar />
            <div className="products-body">
                <h1>Our Products</h1>
                <div className="products-list">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
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

export default Products;
