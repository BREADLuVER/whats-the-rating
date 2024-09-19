// frontend/src/pages/GamesList.js

import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/api';

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Upcoming Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
