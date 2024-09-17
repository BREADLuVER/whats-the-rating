from django.contrib import admin
from .models import ScrapedGame

@admin.register(ScrapedGame)
class ScrapedGameAdmin(admin.ModelAdmin):
    list_display = ['title']
