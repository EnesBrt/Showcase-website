# Generated by Django 4.2.13 on 2024-06-18 15:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("base", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="formpage",
            name="display_title",
            field=models.BooleanField(default=True),
        ),
    ]
