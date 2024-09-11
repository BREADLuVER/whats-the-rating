# backend/game_prediction/urls.py

from django.urls import path
from .views import GameListView, GameDetailView, CreatePredictionView, CommentListView, CreateCommentView

urlpatterns = [
    path('games/', GameListView.as_view(), name='game-list'),
    path('games/<int:pk>/', GameDetailView.as_view(), name='game-detail'),
    path('games/<int:game_id>/comments/', CommentListView.as_view(), name='comment-list'),
    path('games/<int:game_id>/comments/new/', CreateCommentView.as_view(), name='comment-create'),
    path('predictions/', CreatePredictionView.as_view(), name='create-prediction'),
]
