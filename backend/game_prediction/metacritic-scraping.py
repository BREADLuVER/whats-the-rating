import requests
from bs4 import BeautifulSoup
from .models import ScrapedGame

URL = "https://www.metacritic.com/news/major-new-and-upcoming-video-games-ps5-xbox-switch-pc/"
HEADERS = {"User-Agent": "Mozilla/5.0"}

def fetch_game_names():
    response = requests.get(URL, headers=HEADERS)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        game_names = []

        for game in soup.find_all('h3', class_='game-title'):  # Adjust based on actual class/tag
            game_name = game.text.strip()
            game_names.append(game_name)
        return game_names
    return []

def save_game_names_to_db():
    game_names = fetch_game_names()
    for name in game_names:
        ScrapedGame.objects.get_or_create(title=name)
