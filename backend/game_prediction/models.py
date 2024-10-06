# File: game_prediction/models.py

from django.contrib.auth.models import User
from django.db import models

class Game(models.Model):
    title = models.CharField(max_length=200)
    click_count = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class GameClick(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Track which user clicked
    game = models.ForeignKey(Game, on_delete=models.CASCADE)  # Track which game was clicked
    clicked_at = models.DateTimeField(auto_now_add=True)  # Store the time of the click

    class Meta:
        unique_together = ('user', 'game')

    def __str__(self):
        return f"{self.user.username} clicked on {self.game.title}"

class Prediction(models.Model):
    user = models.CharField(max_length=150)
    game = models.CharField(max_length=200, null=True, blank=True)
    journalist = models.CharField(max_length=200, null=True, blank=True)
    predicted_rating = models.IntegerField(null=True, blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} predicts that {self.journalist} will give {self.game} a {self.predicted_rating}"

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
    