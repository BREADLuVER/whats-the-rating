# backend/game_prediction/views.py

from rest_framework import generics
from .models import Game, Prediction, Comment
from .serializers import GameSerializer, PredictionSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated

# List all games
class GameListView(generics.ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

# Get details for a specific game
class GameDetailView(generics.RetrieveAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

# Allow users to submit their prediction
class CreatePredictionView(generics.CreateAPIView):
    serializer_class = PredictionSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# View comments for a specific game
class CommentListView(generics.ListAPIView):
    serializer_class = CommentSerializer

    def get_queryset(self):
        game_id = self.kwargs['game_id']
        return Comment.objects.filter(game_id=game_id)

# Submit a comment
class CreateCommentView(generics.CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Leaderboard view to rank users by prediction accuracy
class LeaderboardView(generics.ListAPIView):
    # We'll define this logic later
    pass
