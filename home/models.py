from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel, MultiFieldPanel


class HomePage(Page):

    # Landing section of the single page website
    landing_image_section = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    landing_section_text = models.CharField(max_length=255, blank=True)

    # About section of the single page website
    about_us_section_title = models.CharField(max_length=255, blank=True)
    about_ussection_text = RichTextField(blank=True)

    # Services section of the single page website
    services_section_title = models.CharField(max_length=255, blank=True)
    services_section_text = models.TextField(blank=True)
    services_image_section = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    # Contentt panels
    content_panels = Page.content_panels + [
        MultiFieldPanel(
            [
                FieldPanel("landing_image_section"),
                FieldPanel("landing_section_text"),
            ],
            heading="Landing Section",
        ),
        MultiFieldPanel(
            [
                FieldPanel("about_us_section_title"),
                FieldPanel("about_us_section_text"),
            ],
            heading="About Us Section",
        ),
        MultiFieldPanel(
            [
                FieldPanel("services_section_title"),
                FieldPanel("services_section_text"),
                FieldPanel("services_image_section"),
            ],
            heading="Services Section",
        ),
    ]
