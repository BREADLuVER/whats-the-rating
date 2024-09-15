// src/app.js

import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import './app.css';  // Include the custom CSS for layout
Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-section left">
          <h2>Future Games</h2>
        </div>
        <div className="header-section center">
          <h2>Live Rating</h2>
          <h2>Leaderboard</h2>
        </div>
        <div className="header-section right">
          <h2>{user.username || 'No Username'}</h2> {/* Display custom username */}
          <button onClick={signOut}>Sign out</button>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <h2>Future Games Content Here</h2>
        {/* Future Games will be displayed here */}
      </main>
    </div>
  );
}

export default withAuthenticator(App);
