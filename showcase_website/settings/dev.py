from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-62po%3^2i*4o%kmazn+*0d9=8pg!t7n-vuo+)3$ap+&8&90@!#"

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ["troisetoilesnettoyage.com", "*"]

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"


try:
    from .local import *
except ImportError:
    pass
