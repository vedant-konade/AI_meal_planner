import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../services/api';
import './Auth.css'; // Same Auth.css styling

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signupUser({ email, password });
      alert("Signup Successful!");
      navigate('/');
    } catch (error) {
      console.error(error);
      alert("Signup Failed!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Join Us 🚀</h2>
      <div className="auth-form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignup}>Signup</button>
        <p>Already have an account? <span className="auth-link" onClick={() => navigate('/')}>Login Here</span></p>
      </div>
    </div>
  );
}

export default Signup;
