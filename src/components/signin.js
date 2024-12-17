import React from "react";
import "./signup.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const signup = () => {
    return(
        <div className="home">
            <Navbar />
                <div className="signup-body">
                    <h1>Login</h1>
                    <p className="label">Username</p>
                    <input
                        type="text"
                        placeholder="enter username"
                        name="username"/>
                    <p className="label">Password</p>
                    <input
                        type="password"
                        placeholder="enter password"
                        name="password"/>
                    <br />
                    <button
                        type="submit"
                        >Sign Up</button>
                    <br />
                    <Link className="link" to='/sign_up'>
                        Create an account
                    </Link>
            <Footer />
            </div>
        </div>
    )
}

export default signup;