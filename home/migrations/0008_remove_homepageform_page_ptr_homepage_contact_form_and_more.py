# Generated by Django 4.2.13 on 2024-06-17 13:58

from django.db import migrations, models
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0007_homepageform_remove_homepage_intro_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="homepageform",
            name="page_ptr",
        ),
        migrations.AddField(
            model_name="homepage",
            name="contact_form",
            field=wagtail.fields.StreamField(
                [
                    (
                        "form_block",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "email_settings",
                                    wagtail.blocks.StructBlock(
                                        [
                                            (
                                                "from_address",
                                                wagtail.blocks.EmailBlock(),
                                            ),
                                            ("to_address", wagtail.blocks.EmailBlock()),
                                            ("subject", wagtail.blocks.CharBlock()),
                                        ]
                                    ),
                                ),
                                ("name", wagtail.blocks.CharBlock(required=True)),
                                (
                                    "phone_number",
                                    wagtail.blocks.CharBlock(required=True),
                                ),
                                (
                                    "multiline_text",
                                    wagtail.blocks.TextBlock(required=True),
                                ),
                            ]
                        ),
                    )
                ],
                null=True,
            ),
        ),
        migrations.AddField(
            model_name="homepage",
            name="intro",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="homepage",
            name="thank_you_text",
            field=models.TextField(blank=True),
        ),
        migrations.DeleteModel(
            name="FormField",
        ),
        migrations.DeleteModel(
            name="HomePageForm",
        ),
    ]
