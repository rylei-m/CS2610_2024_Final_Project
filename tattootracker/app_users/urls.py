# app_users/urls.py
from django.urls import path
from .views import LoginView  # import your view

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
]
