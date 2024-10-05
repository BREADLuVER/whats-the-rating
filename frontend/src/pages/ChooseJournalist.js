import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChooseJournalist.css';
import gameRantIcon from '../images/GameRant_icon.png';
import IGNIcon from '../images/IGN_icon.png';

const ChooseJournalist = ({ gameTitle: propGameTitle }) => {
  const { gameTitle: urlGameTitle } = useParams(); // Extract game title from URL if not passed as a prop
  const navigate = useNavigate();

  // Prefer the gameTitle prop, fallback to URL param
  const gameTitle = propGameTitle || urlGameTitle;

  // Handle button click for navigating to rating page
  const handleJournalistSelection = (journalist) => {
    navigate(`/rate/${journalist}/${encodeURIComponent(gameTitle)}`);
  };

  return (
    <div className="page-container">
      <div className="choose-journalist-container">

        <div className="journalist-options">
          <div className="combined-journalist-option">
            {/* IGN Journalist */}
            <div onClick={() => handleJournalistSelection('IGN')} className="journalist-icon">
              <img src={IGNIcon} alt="IGN" className="journalist-logo" />
              <span>IGN</span>
            </div>

            {/* GameRant Journalist */}
            <div onClick={() => handleJournalistSelection('GameRant')} className="journalist-icon">
              <img src={gameRantIcon} alt="GameRant" className="journalist-logo" />
              <span>GameRant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseJournalist;
