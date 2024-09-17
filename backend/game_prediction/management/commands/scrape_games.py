from django.core.management.base import BaseCommand
from game_prediction.metacritic_scraping import save_game_names_to_db

class Command(BaseCommand):
    help = 'Scrape and save game names to the database'

    def handle(self, *args, **kwargs):
        save_game_names_to_db()
