from django.contrib import admin
from .models import ScrapedGame, Game

@admin.register(ScrapedGame)
class ScrapedGameAdmin(admin.ModelAdmin):
    list_display = ['title']

admin.site.register(Game)