from app_tattootracker import views
from app_tattootracker.views import upload_tattoo
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


app_name = 'project_tattootracker'

urlpatterns = [
    path('', views.home, name='home'),
    path('admin/', admin.site.urls),
    path('api/', include('app_users.urls')),
    path('login/', TemplateView.as_view(template_name='login.html'), name='login'),
    path('signup/', TemplateView.as_view(template_name='signup.html'), name='signup'),
    path('upload_tattoo/', upload_tattoo, name='upload_tattoo'),
    path('app_tattootracker/', include('app_tattootracker.urls')),
    path('users/', include('app_users.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
