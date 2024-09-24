// guess-the-rating/frontend/src/pages/ChooseJournalist.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Add useNavigate
import './ChooseJournalist.css';
import gameRantIcon from '../images/GameRant_icon.png';
import IGNIcon from '../images/IGN_icon.jpg';

const ChooseJournalist = () => {
  const { gameTitle } = useParams(); // Extract game title from URL
  const navigate = useNavigate(); // Initialize navigate

  // Handle button click for navigating to rating page
  const handleJournalistSelection = (journalist) => {
    navigate(`/rate/${journalist}/${encodeURIComponent(gameTitle)}`);
  };

  return (
    <div className="page-container">
      <div className="choose-journalist-container">
        <h1>How Would ___ Rate {decodeURIComponent(gameTitle)}</h1>

        <div className="journalist-options">
          <div className="journalist-option">
            <img src={IGNIcon} alt="IGN" className="journalist-logo" />
            <button 
              className="journalist-button" 
              onClick={() => handleJournalistSelection('IGN')}
            >
              IGN
            </button>
          </div>

          <div className="journalist-option">
            <img src={gameRantIcon} alt="GameRant" className="journalist-logo" />
            <button 
              className="journalist-button" 
              onClick={() => handleJournalistSelection('GameRant')}
            >
              GameRant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseJournalist;
