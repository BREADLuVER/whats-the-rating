// frontend/src/pages/Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/auth/registration/', {
      email: email,
      password1: password1,
      password2: password2,
    })
    .then(response => {
      // Handle successful signup, e.g., store token, redirect user
      localStorage.setItem('token', response.data.key);
      history.push('/');
    })
    .catch(error => {
      console.error('Signup error:', error);
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} required />
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
