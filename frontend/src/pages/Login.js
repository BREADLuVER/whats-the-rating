// frontend/src/pages/Login.js

import React, { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,  // You need to set this in .env file
      callback: handleCredentialResponse,
    });

    // Render the "Sign in with Google" button
    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'), // ID of the button container
      { theme: 'outline', size: 'large' }  // Customization options
    );
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);

    // Send the token to the backend for verification
    axios.post('http://localhost:8000/api/auth/google/', {
      id_token: response.credential,
    })
    .then(res => {
      console.log('Login successful', res.data);
      // You can store the token in local storage or redirect the user as needed
    })
    .catch(err => {
      console.error('Login failed', err);
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <div id="google-signin-button"></div>
    </div>
  );
};

export default Login;
