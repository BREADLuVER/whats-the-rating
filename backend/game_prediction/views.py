# backend/game_prediction/views.py

from rest_framework import generics
from rest_framework.views import APIView
from .models import Game, Prediction, Comment, ScrapedGame
from .serializers import GameSerializer, PredictionSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticated
from google.oauth2 import id_token
from google.auth.transport import requests
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from django.db.models import Q, Count
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

@api_view(['POST'])
def google_login(request):
    token = request.data.get('id_token')

    try:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), "YOUR_GOOGLE_CLIENT_ID")

        google_user_id = idinfo['sub']
        email = idinfo.get('email')
        first_name = idinfo.get('given_name')
        last_name = idinfo.get('family_name')

        user, created = User.objects.get_or_create(username=google_user_id, defaults={
            'first_name': first_name,
            'last_name': last_name,
            'email': email
        })


        return JsonResponse({
            'message': 'User logged in successfully',
            'user_id': user.id,
            'email': user.email,
        })

    except ValueError:
        return JsonResponse({'error': 'Invalid token'}, status=400)


def search_games(request):
    query = request.GET.get('query', '')
    if query:
        games = ScrapedGame.objects.filter(Q(title__icontains=query))[:5]

        game_list = [
            {
                'title': game.title,
                'score': game.score,
            }
            for game in games
        ]
        return JsonResponse(game_list, safe=False)
    
    return JsonResponse({"error": "No query provided."}, status=400)


@api_view(['POST'])
def add_game(request):
    serializer = GameSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse({'status': 'Game added successfully!'})
    return JsonResponse(serializer.errors, status=400)


# Sort games by click_count in descending order
def game_list(request):
    games = Game.objects.all().order_by('-click_count')
    return render(request, 'game_list.html', {'games': games})


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
        game_title = self.request.data.get('game', '')
        user = self.request.data.get('user', '')
        journalist = self.request.data.get('journalist', '')

        existing_prediction = Prediction.objects.filter(user=user, game=game_title, journalist=journalist).first()

        if existing_prediction:
            existing_prediction.predicted_rating = self.request.data.get('predicted_rating')
            existing_prediction.save()
            return existing_prediction
        else:
            # Create a new prediction
            return serializer.save(user=user, game=game_title, journalist=journalist)


# Fetch all predictions for the given game and journalist
#from django.views.decorators.csrf import csrf_exempt
# @csrf_exempt
class AnalystPredictionsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, game_title, journalist_name):
        predictions = Prediction.objects.filter(game=game_title, journalist=journalist_name)

        ratings_count = predictions.values('predicted_rating').annotate(count=Count('predicted_rating'))

        return Response(ratings_count)


@csrf_exempt
def increment_click(request, game_id):
    try:
        game = Game.objects.get(id=game_id)
        game.click_count += 1
        game.save()
        return JsonResponse({"status": "success", "click_count": game.click_count})
    except Game.DoesNotExist:
        return JsonResponse({"status": "error", "message": "Game not found"}, status=404)
    

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
