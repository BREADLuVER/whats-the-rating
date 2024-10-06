from django.core.management.base import BaseCommand
from game_prediction.metacritic_scraping import save_games_to_db

class Command(BaseCommand):
    help = 'Scrapes games from Metacritic and saves them to the database.'

    def handle(self, *args, **kwargs):
        save_games_to_db()
        self.stdout.write(self.style.SUCCESS('Successfully scraped and saved games from Metacritic.'))

