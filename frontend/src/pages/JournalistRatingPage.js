// src/components/JournalistRatingPage.js
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import './JournalistRatingPage.css';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const JournalistRatingPage = () => {
  const [user, setUser] = useState(null);
  const { journalist, gameTitle } = useParams();
  const [selectedRating, setSelectedRating] = useState(null);
  const [message, setMessage] = useState('');
  const [ratingData, setRatingData] = useState(null);
  const [userSubmittedRating, setUserSubmittedRating] = useState(false);
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { username } = await getCurrentUser();
        setUser(username);
        fetchRatingData(username); // Fetch data for the user
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
        setMessage(`You have predicted ${journalist} will rate ${gameTitle} a ${rating}/10!`);
        setUserSubmittedRating(true); // Update submission status
        setUserRating(rating); // Store user rating
        fetchRatingData();
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

  const fetchRatingData = async (username) => {
    try {
      // Fetch rating data for all users
      const response = await axios.get(
        `http://127.0.0.1:8000/api/predictions/${gameTitle}/${journalist}/`,
        { withCredentials: true }
      );
      
      const fetchedData = response.data;
      
      // Log the fetchedData for reference
      console.log('Fetched data:', fetchedData);
  
      // No need to check for ratings field, since the array is returned directly
      if (Array.isArray(fetchedData)) {
        const mappedData = mapDataToGraph(fetchedData); // Pass the array directly
        setRatingData(mappedData);
      } else {
        console.error('Fetched data is not an array.');
        setRatingData(Array(10).fill(0)); // Set default empty ratings array to avoid crash
      }
  
      // Check if user has already submitted a rating (assuming this field is still present)
      if (fetchedData.user_submitted) {
        setUserSubmittedRating(true);
        setUserRating(fetchedData.user_rating); // Set the user's submitted rating
      } else {
        setUserSubmittedRating(false);
      }
    } catch (error) {
      console.error('Error fetching ratings data:', error.response || error);
    }
  };
  
  // Helper function to map the data to the correct format for the bar graph
  const mapDataToGraph = (data) => {
    if (!Array.isArray(data)) {
      console.error('Invalid data format for mapping to graph');
      return Array(10).fill(0); // Return empty array in case of invalid data
    }
  
    const ratingsArray = Array(10).fill(0);
  
    // Iterate over the fetched data and populate the ratings array
    data.forEach(item => {
      const ratingIndex = item.predicted_rating - 1; // Convert to zero-based index
      if (ratingIndex >= 0 && ratingIndex < 10) { // Ensure rating index is within bounds
        ratingsArray[ratingIndex] = item.count;
      }
    });
  
    return ratingsArray;
  };
  

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };


  const graphData = ratingData && {
    labels: [...Array(10).keys()].map(i => (i + 1).toString()),
    datasets: [
      {
        label: 'Ratings Distribution',
        data: ratingData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="rating-page-container">
      <div className="rating-content">
        {message && <h1>{message}</h1>}
        {ratingData && (
          <div className="bar-chart">
            <Bar
              data={graphData}
              options={{ scales: { y: { beginAtZero: true } } }}
            />
          </div>
        )}
        {userSubmittedRating ? (
          <div className="resubmit-section">
            <h2>You have already submitted a rating of {userRating}/10. Would you like to update your rating?</h2>
            <select
              className="rating-dropdown"
              value={selectedRating || userRating || ''}
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
        ) : (
          <div className="rating-select-container">
            <h2>Select your rating for {journalist}'s review of {decodeURIComponent(gameTitle)}</h2>
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
        )}
      </div>
    </div>
  );
};

export default JournalistRatingPage;
