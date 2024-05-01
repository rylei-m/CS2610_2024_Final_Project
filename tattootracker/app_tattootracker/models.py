from django.db import models
from django.contrib.auth.models import User


class Tattoo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tattoos')
    image = models.ImageField(upload_to='tattoos/')
    body_part = models.CharField(max_length=100)
    artist_name = models.CharField(max_length=100)
    date = models.DateField()
    description = models.TextField()
    is_public = models.BooleanField(default=False)
    title = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.user.username}'s tattoo on {self.body_part}"
