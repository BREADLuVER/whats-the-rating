import requests
from bs4 import BeautifulSoup
from .models import ScrapedGame
import logging

# Configure logging
logging.basicConfig(
    filename='game_scraper.log', 
    level=logging.INFO, 
    format='%(asctime)s - %(levelname)s - %(message)s'
)

URL = "https://www.metacritic.com/news/major-new-and-upcoming-video-games-ps5-xbox-switch-pc/"
HEADERS = {"User-Agent": "Mozilla/5.0"}

def fetch_game_names():
    try:
        response = requests.get(URL, headers=HEADERS)
        response.raise_for_status()  # Raise an exception for HTTP errors
        soup = BeautifulSoup(response.content, 'html.parser')
        game_names = []

        # Scraping all anchor tags with href attribute
        for link in soup.find_all('a', href=True):
            if '/game/' in link['href']:  # Ensure it is a game link
                game_name = link.text.strip()
                if game_name:
                    game_names.append(game_name)

        logging.info(f"Successfully fetched {len(game_names)} game names.")
        return game_names
    except requests.exceptions.RequestException as e:
        logging.error(f"Error fetching game names: {e}")
        return []

def save_game_names_to_db():
    game_names = fetch_game_names()
    if game_names:
        for name in game_names:
            try:
                game, created = ScrapedGame.objects.get_or_create(title=name)
                if created:
                    logging.info(f"Added new game: {name}")
                else:
                    logging.info(f"Game already exists in the database: {name}")
            except Exception as e:
                logging.error(f"Error saving game '{name}' to the database: {e}")
    else:
        logging.warning("No game names fetched to save.")
