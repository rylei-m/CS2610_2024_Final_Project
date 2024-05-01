# app_tattootracker/urls.py
from django.urls import path, include
from django.views.generic import TemplateView
from .views import upload_tattoo, view_tattoos, upload_handler, edit_tattoo, home_view
from . import views

urlpatterns = [
    path('', home_view, name='home'),
    path('upload_tattoo/', upload_tattoo, name='upload_tattoo'),
    path('view_tattoos/', view_tattoos, name='view_tattoos'),
    path('upload_handler/', upload_handler, name='upload_handler'),
    path('edit_tattoo/<int:tattoo_id>/', edit_tattoo, name='edit_tattoo'),
    path('public_gallery/', views.public_gallery, name='public_gallery'),
]
