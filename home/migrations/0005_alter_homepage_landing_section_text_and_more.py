# Generated by Django 4.2.13 on 2024-06-14 13:44

from django.db import migrations
import wagtail.fields


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0004_alter_homepage_landing_image_section_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="homepage",
            name="landing_section_text",
            field=wagtail.fields.RichTextField(blank=True),
        ),
        migrations.AlterField(
            model_name="homepage",
            name="services_section_text",
            field=wagtail.fields.RichTextField(blank=True),
        ),
    ]