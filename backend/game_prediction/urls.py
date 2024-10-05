# backend/game_prediction/urls.py

from django.urls import path
from .views import GameListView, GameDetailView, CreatePredictionView, AnalystPredictionsView
from .views import CommentListView, CreateCommentView, search_games, add_game, increment_click

urlpatterns = [
    path('games/', GameListView.as_view(), name='game-list'),
    path('games/<int:pk>/', GameDetailView.as_view(), name='game-detail'),
    path('games/<int:game_id>/comments/', CommentListView.as_view(), name='comment-list'),
    path('games/<int:game_id>/comments/new/', CreateCommentView.as_view(), name='comment-create'),
    path('search-games/', search_games, name='search-games'),
    path('api/add-game/', add_game, name='add-game'),
    path('predictions/', CreatePredictionView.as_view(), name='create-prediction'),
    path('api/predictions/<str:game_title>/<str:journalist_name>/', AnalystPredictionsView.as_view(), name='game-journalist-predictions'),
    path('increment-click/<int:game_id>/', increment_click, name='increment_click'),
]
