// src/app.js

import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import './app.css';  // Include the custom CSS for layout
Amplify.configure(config);

// Import the Framer Navigation component
import Navigation from './framer/navigation';

function App({ signOut, user }) {
  return (
    <div className="app-container">
      {/* Pass user info (username) to the Navigation component */}
      <Navigation userName={user.username || 'User'} />

      {/* Main Content Section */}
      <main className="main-content">
        <h2>Welcome, {user.username || 'User'}!</h2>
        <h2>Future Games Content Here</h2>
        <button onClick={signOut}>Sign Out</button>
      </main>
    </div>
  );
}

export default withAuthenticator(App);

