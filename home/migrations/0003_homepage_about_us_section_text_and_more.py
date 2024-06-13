# Generated by Django 4.2.13 on 2024-06-13 11:19

from django.db import migrations, models
import django.db.models.deletion
import wagtail.fields


class Migration(migrations.Migration):
    dependencies = [
        ("wagtailimages", "0026_delete_uploadedimage"),
        ("home", "0002_create_homepage"),
    ]

    operations = [
        migrations.AddField(
            model_name="homepage",
            name="about_us_section_text",
            field=wagtail.fields.RichTextField(blank=True),
        ),
        migrations.AddField(
            model_name="homepage",
            name="about_us_section_title",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name="homepage",
            name="landing_image_section",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailimages.image",
            ),
        ),
        migrations.AddField(
            model_name="homepage",
            name="landing_section_text",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name="homepage",
            name="services_image_section",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailimages.image",
            ),
        ),
        migrations.AddField(
            model_name="homepage",
            name="services_section_text",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="homepage",
            name="services_section_title",
            field=models.CharField(blank=True, max_length=255),
        ),
    ]