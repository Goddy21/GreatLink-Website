import React, { useState } from "react";
import "./signup.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== '' && password !== ''){
            const url = "http://localhost:5000/signin";
            const headers = {
                Accept: 'application/json',
                'Content-Type':'application/json',
            };
            const userData = {username, password};
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(userData),
            })
            .then((response) => response.json())
            .then((response) => {
                if(response.error){
                    setError(response.error);
                } else {
                    setMsg(response.message);
                    setTimeout(()=>{
                        localStorage.setItem("isSignedIn", true);
                        navigate("/");
                    }, 2000);
                }
            }).catch((err) => setError(err.message));
        } else {
            setError("All fields are required!");
        }
    };

    return(
        <div className="home">
            <Navbar />
            <div className="signup-body">
                <div className="signup-form">
                    <h1>Login</h1>
                    {error && <p className="error-msg">{error}</p>}
                    {msg && <p className="success-msg">{msg}</p>}
                    <form onSubmit={handleSubmit}>
                        <p className="label">Username</p>
                        <input
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <p className="label">Password</p>
                        <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Sign In</button>
                    </form>
                    <Link className="link" to='/signup'>
                        Create an account
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signin;
