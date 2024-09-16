// src/app.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import './app.css';
Amplify.configure(config);

// Import the Framer Navigation component
import Navigation from './framer/navigation';
import Hero from './framer/hero';
import UserPage from './pages/UserPage';

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
    <Router>
      <div className="nav-container">
        {/* Responsive Navigation Component */}
        <Navigation
          userName={user.username || 'User'}
          className='!w-full'
          style={{ width: '100%' }}
          variant={variant}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero
                  className='!w-full'
                  style={{ width: '100%' }}
                  variant={variant}
                />
              </>
            } 
          />
          
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);

