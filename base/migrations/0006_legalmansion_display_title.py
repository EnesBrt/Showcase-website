# Generated by Django 4.2.13 on 2024-08-09 10:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("base", "0005_rename_text_legalmansion_text_mention_legal_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="legalmansion",
            name="display_title",
            field=models.BooleanField(default=True),
        ),
    ]
