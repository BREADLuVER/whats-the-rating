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
        setMessage(`You have predicted ${journalist} will rate ${gameTitle} a ${rating}/10!`);
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

  const fetchRatingData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/predictions/${gameTitle}/${journalist}/`,
        { withCredentials: true }
      );
      const fetchedData = response.data;
      const mappedData = mapDataToGraph(fetchedData);
      setRatingData(mappedData); // Set the data for the bar graph
    } catch (error) {
      console.error('Error fetching ratings data:', error.response || error);
    }
  };

  const getCSRFToken = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];
    return cookieValue;
  };

  // Helper function to map the data to the correct format for the bar graph
  const mapDataToGraph = (data) => {
    // Initialize an array with 10 zeroes (representing ratings 1-10)
    const ratingsArray = Array(10).fill(0);

    // Iterate over the fetched data and populate the ratings array
    data.forEach(item => {
      const ratingIndex = item.predicted_rating - 1; // Convert to zero-based index
      ratingsArray[ratingIndex] = item.count;
    });

    return ratingsArray;
  };

  // Bar graph configuration
  const graphData = ratingData && {
    labels: [...Array(10).keys()].map(i => (i + 1).toString()), // Labels for ratings 1-10
    datasets: [
      {
        label: 'Ratings Distribution',
        data: ratingData, // Use the mapped rating data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="rating-page-container">
      <div className="rating-content">
        {message ? (
          <>
            <h1>{message}</h1>
            {ratingData && (
              <div className="bar-chart">
                <Bar
                  data={graphData}
                  options={{
                    scales: {
                      y: { beginAtZero: true },
                    },
                  }}
                />
              </div>
            )}
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default JournalistRatingPage;