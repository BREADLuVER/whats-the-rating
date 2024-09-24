# backend/game_prediction/urls.py

from django.urls import path
from .views import GameListView, GameDetailView, CreatePredictionView, CommentListView, CreateCommentView, search_games, add_game

urlpatterns = [
    path('games/', GameListView.as_view(), name='game-list'),
    path('games/<int:pk>/', GameDetailView.as_view(), name='game-detail'),
    path('games/<int:game_id>/comments/', CommentListView.as_view(), name='comment-list'),
    path('games/<int:game_id>/comments/new/', CreateCommentView.as_view(), name='comment-create'),
    path('search-games/', search_games, name='search-games'),
    path('api/add-game/', add_game, name='add-game'),
    path('predictions/', CreatePredictionView.as_view(), name='create-prediction'),
]
