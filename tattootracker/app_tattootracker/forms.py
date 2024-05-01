# app_tattootracker/forms.py
from django import forms
from .models import Tattoo

class TattooForm(forms.ModelForm):
    class Meta:
        model = Tattoo
        fields = ['image', 'body_part', 'artist_name', 'date', 'description', 'is_public']
