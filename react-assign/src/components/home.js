import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="home-container">
            <h1 className="animate__animated animate__fadeInDown">Welcome to the Home Page!</h1>
            <p className="animate__animated animate__fadeInUp">
                You are now logged in. Enjoy exploring our application!
            </p>
            <button className="home-button animate__animated animate__pulse animate__infinite">
                Explore More
            </button>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
