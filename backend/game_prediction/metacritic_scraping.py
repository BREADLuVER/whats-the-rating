from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import logging
from .models import ScrapedGame

# Configure logging
logging.basicConfig(
    filename='game_scraper.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

EXCLUDED_TITLES = [
    "Meta Quest release calendar",
    "Nintendo Switch release calendar",
    "PC release calendar",
    "Xbox One release calendar",
    "Xbox Series X/S release calendar",
    "PS4 release calendar",
    "PS5 release calendar",
    "[REDACTED]",
    "read early hands-on impressions",
    "Mobile",
    "Switch",
    "PC",
    "Xbox One",
    "Xbox Series X/S",
    "PS4",
    "PS5",
    "See All",
    "New Switch Games",
    "New PC Games",
    "New Xbox Series X/S Games",
    "New PS5 Games",
    "Upcoming Releases",
    "Best Games of All Time",
    "Best Games This Year",
    "Games"
]

URL = "https://www.metacritic.com/news/major-new-and-upcoming-video-games-ps5-xbox-switch-pc/"

def setup_driver():
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Run in headless mode for performance
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    # Specify the path to the ChromeDriver
    service = Service("C:\\Users\\bread\\.wdm\\drivers\\chromedriver\\win64\\128.0.6613.137\\chromedriver-win32\\chromedriver.exe")

    driver = webdriver.Chrome(service=service, options=chrome_options)
    return driver

# Setup Selenium with Chrome in headless mode
def is_valid_title(title):
    """Check if the title is a valid game title."""
    return title not in EXCLUDED_TITLES

def fetch_game_data():
    try:
        driver = setup_driver()
        driver.get(URL)

        # Wait for the table containing the game data to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "tr"))
        )

        # Get the page source after JavaScript has executed
        soup = BeautifulSoup(driver.page_source, 'html.parser')

        game_data = []

        # Locate all table rows in the HTML
        rows = soup.find_all('tr')
        
        for row in rows:
            # Find the game title
            game_link = row.find('a', href=True, rel="follow")  # The title link has the rel="follow" attribute
            if game_link:
                game_name = game_link.text.strip()

                # Validate the game title
                if not is_valid_title(game_name):
                    logging.info(f"Excluded non-game title: {game_name}")
                    continue  # Skip adding invalid titles

                # Find the score associated with the game
                score_tag = row.find('a', class_='c-shortcodeTvObject')  # The score link has the 'c-shortcodeTvObject' class
                if score_tag:
                    score = score_tag.text.strip()  # The score is the text within this tag
                else:
                    score = 'tbd'  # Default to 'tbd' if no score is found

                # Append the game name and score to the list
                game_data.append((game_name, score))

        logging.info(f"Successfully fetched {len(game_data)} games with scores.")
        driver.quit()  # Always close the driver
        return game_data

    except Exception as e:
        logging.error(f"Error fetching game data: {e}")
        return []

def save_games_to_db():
    game_data = fetch_game_data()
    if game_data:
        for name, score in game_data:
            try:
                # Create or update the ScrapedGame with both name and score
                game, created = ScrapedGame.objects.update_or_create(
                    title=name,
                    defaults={'score': score}
                )
                if created:
                    logging.info(f"Added new game: {name} with score {score}")
                else:
                    logging.info(f"Updated game: {name} with new score {score}")
            except Exception as e:
                logging.error(f"Error saving game '{name}' to the database: {e}")
    else:
        logging.warning("No game data fetched to save.")