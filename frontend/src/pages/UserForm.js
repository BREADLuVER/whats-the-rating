import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';

const UserForm = () => {
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [developer, setDeveloper] = useState('');
  const navigate = useNavigate();

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
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Release Date:</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Game Developer:</label>
          <input
            type="text"
            value={developer}
            onChange={(e) => setDeveloper(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
