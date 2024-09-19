# backend/game_prediction/serializers.py

from rest_framework import serializers
from .models import Game, Prediction, Comment

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title']

class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ['id', 'user', 'game', 'predicted_rating', 'submitted_at']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'game', 'content', 'created_at', 'parent']
