from django import template

# import site:
from wagtail.models import Site

register = template.Library()


# ... keep the definition of get_footer_text and add the get_site_root template tag:
@register.simple_tag(takes_context=True)
def get_site_root(context):
    return Site.find_for_request(context["request"]).root_page


@register.simple_tag(takes_context=True)
def get_menu_items(context):
    request = context["request"]
    site = Site.find_for_request(request)
    menu_items = site.root_page.get_descendants(inclusive=True).live().in_menu()
    context["menuitems"] = menu_items
    return ""
