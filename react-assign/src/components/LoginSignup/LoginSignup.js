import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        contact: '',
        agree: false,
    });
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (state === "Sign Up" && !formData.username.trim()) {
            errors.username = "Username is required.";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }
        if (!formData.password.trim()) {
            errors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters.";
        }
        if (state === "Sign Up" && !formData.contact.trim()) {
            errors.contact = "Contact number is required.";
        } else if (state === "Sign Up" && !/^\d{10}$/.test(formData.contact)) {
            errors.contact = "Contact number must be a valid 10-digit number.";
        }
        if (!formData.agree) {
            errors.agree = "You must agree to the terms and conditions.";
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
    
        if (Object.keys(errors).length === 0) {
            try {
                if (state === "Sign Up") {
                    const response = await axios.post('http://localhost:5000/api/auth/signup', {
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                        contact: formData.contact,
                    });
                    console.log("Signup successful:", response.data);
                    alert(response.data.message);
                    setState("Login");
                } else {
                    const response = await axios.post('http://localhost:5000/api/auth/login', {
                        email: formData.email,
                        password: formData.password,
                    });
                    console.log("Login successful:", response.data);
                    
                    // Store token in localStorage
                    localStorage.setItem("token", response.data.token);
    
                    alert("Login successful!");
                    navigate('/home'); // Navigate to home
                }
    
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    contact: '',
                    agree: false,
                });
    
                setValidationErrors({});
            } catch (error) {
                console.error("Error during form submission:", error.response.data.message);
                alert(error.response.data.message);
            }
        } else {
            setValidationErrors(errors);
        }
    };
    

    return (
        <div className="loginSignup">
            <div className="loginSignup-container">
                <h1>{state}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="loginSignup-fields">
                        {state === "Sign Up" && (
                            <>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.username && <p className="error">{validationErrors.username}</p>}
                                <input
                                    name="contact"
                                    type="text"
                                    placeholder="Contact Number"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                />
                                {validationErrors.contact && <p className="error">{validationErrors.contact}</p>}
                            </>
                        )}
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {validationErrors.email && <p className="error">{validationErrors.email}</p>}
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {validationErrors.password && <p className="error">{validationErrors.password}</p>}
                    </div>

                    <button type="submit">Continue</button>

                    {state === "Sign Up" ? (
                        <p className="loginSignup-login">
                            Already have an account? <span onClick={() => setState("Login")}>Login here</span>
                        </p>
                    ) : (
                        <p className="loginSignup-login">
                            Create an account? <span onClick={() => setState("Sign Up")}>Click here</span>
                        </p>
                    )}

                    <div className="loginSignup-agree">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleInputChange}
                        />
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                        {validationErrors.agree && <p className="error">{validationErrors.agree}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginSignup;
