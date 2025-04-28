import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import './Auth.css'; // we'll create Auth.css for common styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser({ email, password });
      alert("Login Successful!");
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert("Login Failed! Check your credentials.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back 👋</h2>
      <div className="auth-form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <p>New User? <span className="auth-link" onClick={() => navigate('/signup')}>Create an Account</span></p>
      </div>
    </div>
  );
}

export default Login;
