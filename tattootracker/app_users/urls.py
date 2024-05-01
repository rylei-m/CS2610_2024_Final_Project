# app_users/urls.py
# app_users/urls.py
from django.urls import path
from .views import SignUpView, LoginView, LogoutView

app_name = 'app_users'

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
