import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Signup from "./components/signup.js"; // Capitalize the component name
import Signin from "./components/signin.js"; // Capitalize the component name
import Departments from './components/Departments.js';
import Products from './components/Products.js';
import Accessories from './components/Accessories.js';
import ContactUs from './components/ContactUs.js';
import AboutUs from './components/AboutUs.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/departments' element={<Departments />} />
              <Route path="/products" element={<Products />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
