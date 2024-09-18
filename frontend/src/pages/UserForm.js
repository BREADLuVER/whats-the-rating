import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserForm.css';

const UserForm = () => {
  const [title, setTitle] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [releaseDate, setReleaseDate] = useState('');
  const [developer, setDeveloper] = useState('');
  const navigate = useNavigate();

  // Function to fetch game suggestions from the backend
  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get('/api/search-games/', {
        params: { query },
      });
      setSuggestions(response.data);  // Set suggestions based on response
    } catch (error) {
      console.error('Error fetching game suggestions:', error);
    }
  };

  // Handle the title input change
  const handleTitleChange = (e) => {
    const query = e.target.value;
    setTitle(query);

    // Fetch suggestions if the query has 2 or more characters
    if (query.length >= 2) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);  // Clear suggestions if query is too short
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      gameTitle: title,
      expectedReleaseDate: releaseDate,
      gameDeveloper: developer,
    });
    
    navigate('/');
  };

  return (
    <div className="user-form">
      <h2>Add a New Future Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Game Title:</label>
          <div className="input-with-button">
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              required
            />
            <button type="submit">Search</button>
          </div>
          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <ul className="suggestions-dropdown">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => setTitle(suggestion.title)}>
                  {suggestion.title} ({suggestion.score})
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
