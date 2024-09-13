import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';  // Optional, if you have styles
import App from './app';  // Ensure App.js exists
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();