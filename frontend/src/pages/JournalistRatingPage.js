// guess-the-rating/frontend/src/pages/JournalistRatingPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './JournalistRatingPage.css';
import axios from 'axios';

const JournalistRatingPage = () => {
  const { journalist, gameTitle } = useParams(); // Extract journalist and game title from URL
  const [selectedRating, setSelectedRating] = useState(null); // Store the selected rating

  // Handle rating click and submission
  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    submitRating(rating); // Submit the rating when selected
  };

  // Submit rating to the backend
  const submitRating = async (rating) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/predictions/', // Correct API endpoint with /api/ prefix
        {
          game: decodeURIComponent(gameTitle),
          predicted_rating: rating,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
  
      if (response.status === 201) {
        console.log('Rating submitted successfully!');
      } else {
        console.error('Error submitting rating');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
