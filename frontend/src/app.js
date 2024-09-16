// src/app.js

import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import './app.css';  // Include custom CSS for layout
Amplify.configure(config);

// Import the Framer Navigation component
import Navigation from './framer/navigation';

// Hook to get window size for responsiveness
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Call it on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function App({ signOut, user }) {
  const size = useWindowSize();
  let variant;

  // Adjust the variant based on the screen width
  if (size.width < 600) {
    variant = 'Phone'; // Mobile variant
  } else if (size.width < 1024) {
    variant = 'Phone'; // Tablet variant
  } else {
    variant = 'Desktop'; // Desktop variant
  }

  return (
    <div className="app-container">
      {/* Responsive Navigation Component */}
      <Navigation
        userName={user.username || 'User'}  // Properly pass userName prop
        className='!w-full'  // Use className to override width
        style={{ width: '100%' }}  // Override Framer's default styles
        variant={variant}  // Pass the variant based on screen size
      />

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

