from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel, MultiFieldPanel
from wagtail.admin.forms import WagtailAdminPageForm

from wagtail.fields import StreamField
from wagtail import blocks


class HomePage(Page):

    display_title = models.BooleanField(default=True)

    # Landing section of the single page website
    landing_image_section = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    landing_section_text = RichTextField(blank=True)

    # About section of the single page website
    about_us_section_title = models.CharField(max_length=255, blank=True)
    about_us_section_text = RichTextField(blank=True)

    # Services section of the single page website
    services_section_title = models.CharField(max_length=255, blank=True)
    services_section_text = RichTextField(blank=True)
    services_image_section = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    # Conctact section of the single page website
    conctact_us_section_title = models.CharField(max_length=255, blank=True)
    conctact_us_section_text = RichTextField(blank=True)
    contact_us_image_section = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    # Contentt panels
    content_panels = Page.content_panels + [
        FieldPanel("display_title"),
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
        MultiFieldPanel(
            [
                FieldPanel("conctact_us_section_title"),
                FieldPanel("conctact_us_section_text"),
                FieldPanel("contact_us_image_section"),
            ],
            heading="Conctact Us Section",
        ),
    ]
