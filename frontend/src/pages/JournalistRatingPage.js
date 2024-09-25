// guess-the-rating/frontend/src/pages/JournalistRatingPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './JournalistRatingPage.css';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import axios from 'axios';

const JournalistRatingPage = () => {
  const [user, setUser] = useState(null);
  const { journalist, gameTitle } = useParams(); // Extract journalist and game title from URL
  const [selectedRating, setSelectedRating] = useState(null); // Store the selected rating

  // Handle rating click and submission
  const handleRatingClick = (rating) => {
    console.log(`Rating clicked: ${rating}`);
    setSelectedRating(rating);
    submitRating(rating); // Submit the rating when selected
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { username } = await getCurrentUser();  // Fetch the current user's username
        setUser(username);  // Store the username in state
      } catch (error) {
        console.error('Error fetching user session:', error);
      }
    };

    fetchUser();  // Fetch user when component mounts
  }, []);

  // Submit rating to the backend
  const submitRating = async (rating) => {
    const csrfToken = getCSRFToken();
    console.log("Submitting rating:", rating);
    
    // Log the axios config object
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      withCredentials: true,
    };
  
    const postData = {
      user: user,
      game: gameTitle,  // Use game ID instead of title if required
      journalist: journalist,
      predicted_rating: rating,
    };
  
    console.log("Post data:", postData);
    console.log("Axios config:", axiosConfig);
    try {
      console.log("Preparing to send POST request");
      const response = await axios.post(
        'http://127.0.0.1:8000/api/predictions/',  // Full URL for Django API
        {
          user: user,
          game: gameTitle,  // Use game ID instead of title if required
          journalist: journalist,
          predicted_rating: rating,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,  // Send CSRF token if using session-based auth
          },
          withCredentials: true,  // Include session cookie
        }
      );
      
      if (response.status === 201) {
        alert('Rating submitted successfully!');
      } else {
        alert('Failed to submit rating.');
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
      console.log('Request headers:', error.config.headers); 
    }
  };  

  // Helper function to get CSRF token from cookies
  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };

  return (
    <div className="rating-page-container">
      <div className="rating-content">
        <h1>{journalist}'s Rating for {decodeURIComponent(gameTitle)}</h1>

        <div className="rating-options">
          {[...Array(10).keys()].map((_, index) => (
            <button
              key={index + 1}
              className={`rating-button ${selectedRating === index + 1 ? 'selected' : ''}`}
              onClick={() => handleRatingClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {selectedRating && <p>You selected a rating of {selectedRating}.</p>}
      </div>
    </div>
  );
};

export default JournalistRatingPage;
