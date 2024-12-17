import React from "react";
import './Departments.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Departments = () => {
    const departments = [
        { id: 1, name: "Sales and Marketing", description: "Responsible for promoting and selling products or services." },
        { id: 2, name: "Installation and Maintenance", description: "Handles installation and regular maintenance of equipment." },
        { id: 3, name: "Procurement and Supply", description: "Oversees procurement and distribution of goods." },
        { id: 4, name: "Repair Services", description: "Provides repair solutions for damaged products." },
        { id: 5, name: "Customer Support", description: "Assists customers with inquiries and issues." },
    ];

    return (
        <div className="departments">
            <Navbar />
            <div className="departments-body">
                <h1>Our Departments</h1>
                <div className="departments-list">
                    {departments.map((dept) => (
                        <div key={dept.id} className="department-card">
                            <h3>{dept.name}</h3>
                            <p>{dept.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Departments;
