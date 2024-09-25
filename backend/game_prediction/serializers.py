# backend/game_prediction/serializers.py

from rest_framework import serializers
from .models import Game, Prediction, Comment

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title']


class PredictionSerializer(serializers.ModelSerializer):
    user = serializers.CharField()  # Accept username
    game = serializers.CharField(required=False)  # Make game optional
    journalist = serializers.CharField(required=False)  # Make journalist optional
    predicted_rating = serializers.IntegerField(required=False)  # Make rating optional

    class Meta:
        model = Prediction
        fields = ['id', 'user', 'game', 'journalist', 'predicted_rating', 'submitted_at']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'game', 'content', 'created_at', 'parent']
