# Generated by Django 5.0.4 on 2024-05-01 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_tattootracker', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tattoo',
            name='is_public',
            field=models.BooleanField(default=False),
        ),
    ]
