import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChooseJournalist2.css';
import gameRantIcon from '../images/GameRant_icon.png';
import IGNIcon from '../images/IGN_icon.png';

const ChooseJournalist2 = () => {
  const { gameTitle } = useParams();
  const navigate = useNavigate();

  const handleJournalistSelection = (journalist) => {
    navigate(`/rate/${journalist}/${encodeURIComponent(gameTitle)}`);
  };

  return (
    <div className="page-container-2">
      <div className="choose-journalist-container-2">
        <div className="journalist-options-2">
          <div className="combined-journalist-option-2">
            {/* IGN */}
            <div onClick={() => handleJournalistSelection('IGN')} className="journalist-icon-2">
              <img src={IGNIcon} alt="IGN" />
              <span>IGN</span>
            </div>

            {/* GameRant */}
            <div onClick={() => handleJournalistSelection('GameRant')} className="journalist-icon-2">
              <img src={gameRantIcon} alt="GameRant" />
              <span>GameRant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseJournalist2;
