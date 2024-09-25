from django.contrib import admin
from .models import ScrapedGame, Game, Prediction

@admin.register(ScrapedGame)
class ScrapedGameAdmin(admin.ModelAdmin):
    list_display = ['title']

admin.site.register(Game)
admin.site.register(Prediction)