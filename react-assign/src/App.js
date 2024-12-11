import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup '
import Home from './components/home'

const App = () => {
  const isLoggedIn = !!localStorage.getItem('token');

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