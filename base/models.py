from django.db import models

from wagtail.models import Page

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
from wagtail.admin.mail import send_mail


# ... keep the definition of NavigationSettings and FooterText. Add FormField and FormPage:
class FormField(AbstractFormField):
    page = ParentalKey("FormPage", on_delete=models.CASCADE, related_name="form_fields")


class FormPage(AbstractEmailForm):
    display_title = models.BooleanField(default=True)
    intro = RichTextField(blank=True)
    thank_you_text = RichTextField(blank=True)

    content_panels = AbstractEmailForm.content_panels + [
        FieldPanel("display_title"),
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

    def send_mail(self, form):

        # Préparer le sujet et le corps du message
        subject = subject = f"{self.subject}"
        message = self.render_email(form)
        addresses = [x.strip() for x in self.to_address.split(",")]

        # Envoyer l'email
        send_mail(
            subject,
            message,
            addresses,
            self.from_address,
        )


class LegalMansion(Page):
    display_title = models.BooleanField(default=True)
    template = "base/legal_mantion_page.html"
    title_mention_legal = models.CharField(max_length=500, blank=True)
    text_mention_legal = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("display_title"),
        MultiFieldPanel(
            [
                FieldPanel("title_mention_legal"),
                FieldPanel("text_mention_legal"),
            ],
            heading="Mention legal",
        ),
    ]


@register_snippet
class FooterText(
    DraftStateMixin,
    RevisionMixin,
    PreviewableMixin,
    TranslatableMixin,
    models.Model,
):

    body = RichTextField()

    panels = [
        FieldPanel("body"),
        PublishingPanel(),
    ]

    def __str__(self):
        return "Footer text"

    def get_preview_template(self, request, mode_name):
        return "base.html"

    def get_preview_context(self, request, mode_name):
        return {"footer_text": self.body}

    class Meta(TranslatableMixin.Meta):
        verbose_name_plural = "Footer Text"
