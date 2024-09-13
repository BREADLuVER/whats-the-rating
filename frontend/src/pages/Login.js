// frontend/src/pages/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/auth/login/', {
      email: email,
      password: password,
    })
    .then(response => {
      // Handle successful login, e.g., store token, redirect user
      localStorage.setItem('token', response.data.key);
      history.push('/');
    })
    .catch(error => {
      console.error('Login error:', error);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>

      <a href="http://localhost:8000/api/auth/google/login/">Login with Google</a>
    </div>
  );
};

export default Login;
