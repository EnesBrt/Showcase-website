# Generated by Django 4.2.13 on 2024-06-28 13:09

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0011_homepage_conctact_us_section_text_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="homepage",
            old_name="conctact_us_section_text",
            new_name="contact_us_section_text",
        ),
        migrations.RenameField(
            model_name="homepage",
            old_name="conctact_us_section_title",
            new_name="contact_us_section_title",
        ),
    ]
