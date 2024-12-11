import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup'
import Home from './components/home'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
}, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  )
}

export default App