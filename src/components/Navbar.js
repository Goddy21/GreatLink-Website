import React, { useState, useEffect } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [click, setClick] = useState(false);

    // Check if the mobile menu should be open based on the localStorage value
    useEffect(() => {
        const savedClickState = localStorage.getItem('clickState');
        if (savedClickState === 'true') {
            setClick(true);
        }
    }, []);

    // Handle mobile menu toggle
    const handleClick = () => {
        setClick(!click);
        localStorage.setItem('clickState', !click);  // Store the state in localStorage
    };

    const closeMobileMenu = () => {
        setClick(false);
        localStorage.setItem('clickState', false);  // Close menu and store in localStorage
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src='/images/logo.png' alt='logo' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/departments" className="nav-links" onClick={closeMobileMenu}>
                            Departments
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/accessories" className="nav-links" onClick={closeMobileMenu}>
                            Accessories
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin" className="nav-button" onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
