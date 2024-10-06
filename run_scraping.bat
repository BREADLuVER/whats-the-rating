@echo off
cd /d "%~dp0"
python -m backend.game_prediction.metacritic_scraping
