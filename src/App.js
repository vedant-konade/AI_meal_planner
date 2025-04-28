import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
function Footer() {
  return (
    <div style={{
      marginTop: "50px",
      textAlign: "center",
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      fontSize: "14px"
    }}>
      Built with ❤️ by Vedant, Pranay,Saianjal and Piyush
    </div>
  );
}

export default App;
