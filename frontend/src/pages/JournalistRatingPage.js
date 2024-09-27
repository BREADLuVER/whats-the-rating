// src/components/JournalistRatingPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './JournalistRatingPage.css';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import axios from 'axios';

const JournalistRatingPage = () => {
  const [user, setUser] = useState(null);
  const { journalist, gameTitle } = useParams();
  const [selectedRating, setSelectedRating] = useState(null);
  const [message, setMessage] = useState(''); // Message to display after rating submission

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { username } = await getCurrentUser();
        setUser(username);
      } catch (error) {
        console.error('Error fetching user session:', error);
      }
    };

    fetchUser();
  }, []);

  const submitRating = async (rating) => {
    const csrfToken = getCSRFToken();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/predictions/',
        {
          user,
          game: gameTitle,
          journalist,
          predicted_rating: rating,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        setMessage(`Rating of ${rating} submitted successfully!`);
      } else {
        setMessage('Failed to submit rating.');
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
      setMessage('An error occurred while submitting your rating.');
    }
  };

  const handleRatingChange = (e) => {
    const rating = parseInt(e.target.value, 10);
    setSelectedRating(rating);
    submitRating(rating);
  };

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };

  return (
    <div className="rating-page-container">
      <div className="rating-content">
        <h1>{journalist}'s Rating for {decodeURIComponent(gameTitle)}</h1>

        <div className="rating-select-container">
          <select
            className="rating-dropdown"
            value={selectedRating || ''}
            onChange={handleRatingChange}
          >
            <option value="" disabled>
              Select a rating
            </option>
            {[...Array(10).keys()].map((index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        {selectedRating && <p>You selected a rating of {selectedRating}.</p>}
        {message && <p className="rating-message">{message}</p>}
      </div>
    </div>
  );
};

export default JournalistRatingPage;