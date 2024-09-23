//guess-the-rating\frontend\src\pages\ChooseJournalist.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ChooseJournalist.css';
import gameRantIcon from '../images/GameRant_icon.png';
import IGNIcon from '../images/IGN_icon.jpg';

const ChooseJournalist = () => {
  const { gameTitle } = useParams(); // Extract game title from URL

  return (
    <div className="choose-journalist-container">
      <h1>How Would ___ Rate {decodeURIComponent(gameTitle)}</h1>

      <div className="journalist-options">
        <div className="journalist-option">
          <img src={IGNIcon} alt="IGN" className="journalist-logo" />
          <button className="journalist-button">IGN</button>
        </div>

        <div className="journalist-option">
          <img src={gameRantIcon} alt="GameRant" className="journalist-logo" />
          <button className="journalist-button">GameRant</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseJournalist;
