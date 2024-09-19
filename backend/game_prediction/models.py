# File: game_prediction/models.py

from django.contrib.auth.models import User
from django.db import models

class Game(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Prediction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    predicted_rating = models.FloatField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}'s prediction for {self.game.title}"

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, related_name="comments", on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    parent = models.ForeignKey('self', null=True, blank=True, related_name='replies', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}'s comment on {self.game.title}"

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return self.user.username

class ScrapedGame(models.Model):
    title = models.CharField(max_length=255, unique=True, db_index=True)
    score = models.CharField(max_length=10, default='tbd')  # Store the score as a string, either number or 'tbd'

    def __str__(self):
        return f"{self.title} ({self.score})"