# app_tattootracker/urls.py
from django.urls import path
from .views import upload_tattoo, view_tattoos, upload_handler, edit_tattoo, home_view, public_gallery, signup_success
from . import views

urlpatterns = [
    path('', home_view, name='home'),
    path('upload_tattoo/', upload_tattoo, name='upload_tattoo'),
    path('view_tattoos/', view_tattoos, name='view_tattoos'),  # Add this line
    path('upload_handler/', upload_handler, name='upload_handler'),
    path('edit_tattoo/<int:tattoo_id>/', edit_tattoo, name='edit_tattoo'),
    path('public_gallery/', views.public_gallery, name='public_gallery'),
    path('signup-success/', views.signup_success, name='signup_success'),
]
