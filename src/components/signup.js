import React, {useState} from "react";
import "./signup.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate} from "react-router-dom";


const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
        }
      
        const userData = { username, email, password };
        console.log("Sending request to server with data:", userData);
      
        try {
          const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
      
          if (!response.ok) {
            throw new Error("Failed to sign up. Please try again.");
          }
      
          const data = await response.json();
          console.log("Response from server:", data);
      
          if (data.error) {
            setError(data.error);
          } else {
            setMsg(data.message);
            setTimeout(() => navigate("/signin"), 2000);
          }
        } catch (err) {
          console.error("Error during signup:", err.message);
          setError(err.message);
        }
      };

      
    return(
        <div className="home">
            <Navbar />
                <div className="signup-body">
                    <h1>Sign Up</h1>
                    <p className="label">Username</p>
                    <input
                        type="text"
                        placeholder="enter username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required/>
                    <p className="label">Email</p>
                    <input
                        type="email"
                        placeholder="enter email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                    <p className="label">Password</p>
                    <input
                        type="password"
                        placeholder="enter password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    <p className="label">Confirm Password</p>
                    <input
                        type="password"
                        placeholder="re-enter password"
                        name="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <br />
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        >Sign Up</button>
                    <br />
                    <Link className="link" to='/signin'>
                        I am already registered
                    </Link>
            <Footer />
            </div>
        </div>
    )
}

export default Signup;