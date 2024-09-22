import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import './app.css';
Amplify.configure(config);

// Import the Framer Navigation component
import Navigation from './framer/navigation';
import Hero from './framer/hero';
import UserSurvey from './framer/userSurvey';

// Import pages
import UserPage from './pages/UserPage';
import UserForm from './pages/UserForm';
import axios from 'axios';  // Import axios to handle the API call

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Call it on mount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function App({ signOut, user }) {
  const size = useWindowSize();
  let variant;

  // Adjust the variant based on the screen width
  if (size.width < 600) {
    variant = 'Phone'; // Mobile variant
  } else if (size.width < 1024) {
    variant = 'Phone'; // Tablet variant
  } else {
    variant = 'Desktop'; // Desktop variant
  }

  // State to hold the list of games
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [filteredGames, setFilteredGames] = useState([]); // Filtered game list

  // Fetch games from the backend when the component is mounted
  const fetchGames = async () => {
    try {
      const response = await axios.get('/api/games/');
      setGames(response.data);  // Store the fetched games in state
      setFilteredGames(response.data); // Set the filteredGames initially to all games
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  // Fetch games on component mount
  useEffect(() => {
    fetchGames();
  }, []);

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the game list based on the search query
    const filtered = games.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
    setFilteredGames(filtered);
  };

  return (
    <Router>
      <div className="nav-container">
        {/* Responsive Navigation Component */}
        <Navigation
          userName={user.username || 'User'}
          className="!w-full"
          style={{ width: '100%' }}
          variant={variant}
        />
  
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <Hero
                  className="!w-full"
                  style={{ width: '100%' }}
                  variant={variant}
                />
                <UserSurvey
                  className="!w-full"
                  style={{ width: '100%' }}
                  variant={variant}
                />
  
                {/* Add a section to display games */}
                <div className="game-list">
                  <h2>Anticipated Future Games</h2>
                  {/* Search Bar */}
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Search for a game..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                  <ul>
                    {filteredGames.map((game) => (
                      <li key={game.id}>
                        <span className="game-title">{game.title}</span>
                        <span className="game-rating">{game.averageRating}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            }
          />
          <Route path="/user" element={<UserPage />} />
          <Route path="/userForm" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default withAuthenticator(App);
