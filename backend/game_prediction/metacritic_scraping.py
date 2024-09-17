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

def fetch_game_names_and_scores():
    try:
        response = requests.get(URL, headers=HEADERS)
        response.raise_for_status()  # Raise an exception for HTTP errors
        soup = BeautifulSoup(response.content, 'html.parser')
        games_data = []

        # Scraping each row in the table
        for row in soup.find_all('tr', class_='grid'):
            game_tag = row.find('a', href=True)  # Find the anchor tag for the game name
            score_tag = row.find('a', class_='o-inlineScore')  # Find the score tag

            if game_tag and score_tag:
                game_name = game_tag.text.strip()
                score = score_tag.text.strip()
                games_data.append({'name': game_name, 'score': score})

        logging.info(f"Successfully fetched {len(games_data)} game names and scores.")
        return games_data
    except requests.exceptions.RequestException as e:
        logging.error(f"Error fetching game names and scores: {e}")
        return []

def save_games_to_db():
    games_data = fetch_game_names_and_scores()
    if games_data:
        for game in games_data:
            try:
                # Use the get_or_create method to avoid duplicates
                scraped_game, created = ScrapedGame.objects.get_or_create(
                    title=game['name'],
                    defaults={'score': game['score']}
                )
                if created:
                    logging.info(f"Added new game: {game['name']} with score: {game['score']}")
                else:
                    logging.info(f"Game already exists: {game['name']} with score: {game['score']}")
            except Exception as e:
                logging.error(f"Error saving game '{game['name']}' to the database: {e}")
    else:
        logging.warning("No game data fetched to save.")