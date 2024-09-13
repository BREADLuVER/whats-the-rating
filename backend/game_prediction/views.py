# backend/game_prediction/views.py

from rest_framework import generics
from .models import Game, Prediction, Comment
from .serializers import GameSerializer, PredictionSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated
from google.oauth2 import id_token
from google.auth.transport import requests
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view


@api_view(['POST'])
def google_login(request):
    token = request.data.get('id_token')

    try:
        # Specify the CLIENT_ID of the app that accesses the backend
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), "YOUR_GOOGLE_CLIENT_ID")

        # ID token is valid, get the user’s Google Account info
        google_user_id = idinfo['sub']
        email = idinfo.get('email')
        first_name = idinfo.get('given_name')
        last_name = idinfo.get('family_name')

        # If the user doesn't exist, create a new one
        user, created = User.objects.get_or_create(username=google_user_id, defaults={
            'first_name': first_name,
            'last_name': last_name,
            'email': email
        })

        # You can implement token-based auth here if necessary (e.g., using JWT)

        return JsonResponse({
            'message': 'User logged in successfully',
            'user_id': user.id,
            'email': user.email,
        })

    except ValueError:
        # Invalid token
        return JsonResponse({'error': 'Invalid token'}, status=400)
    

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
