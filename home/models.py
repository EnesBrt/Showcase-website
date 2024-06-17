from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel, MultiFieldPanel

# import parentalKey:
from modelcluster.fields import ParentalKey

# import FieldRowPanel and InlinePanel:
from wagtail.admin.panels import (
    FieldPanel,
    FieldRowPanel,
    InlinePanel,
    MultiFieldPanel,
    PublishingPanel,
)

from wagtail.fields import RichTextField
from wagtail.models import (
    DraftStateMixin,
    PreviewableMixin,
    RevisionMixin,
    TranslatableMixin,
)

# import AbstractEmailForm and AbstractFormField:
from wagtail.contrib.forms.models import AbstractEmailForm, AbstractFormField

# import FormSubmissionsPanel:
from wagtail.contrib.forms.panels import FormSubmissionsPanel
from wagtail.contrib.settings.models import (
    BaseGenericSetting,
    register_setting,
)
from wagtail.snippets.models import register_snippet


class HomePage(Page):

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

    # Contact section of the single page website

    intro = RichTextField(blank=True)
    thank_you_text = RichTextField(blank=True)


class FormField(AbstractFormField):
    page = ParentalKey("HomePage", on_delete=models.CASCADE, related_name="form_fields")

    # Contentt panels
    content_panels = AbstractEmailForm.content_panels + [
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
        FormSubmissionsPanel(),
        FieldPanel("intro"),
        InlinePanel("form_fields", label="Form fields"),
        FieldPanel("thank_you_text"),
        MultiFieldPanel(
            [
                FieldRowPanel(
                    [
                        FieldPanel("from_address"),
                        FieldPanel("to_address"),
                    ]
                ),
                FieldPanel("subject"),
            ],
            "Email",
        ),
    ]
