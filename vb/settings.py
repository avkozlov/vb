"""
Django settings for vb project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os


BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'as!tc#0o7zq2c#aynt0i!tfl6bgr0p06o@-spyy3f_fyzv_tbc'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

AUTH_USER_MODEL = 'customauth.MyUser'

TEMPLATE_DEBUG = True

ALLOWED_HOSTS = ['*']
#
TEMPLATE_CONTEXT_PROCESSORS = (
    'django.contrib.auth.context_processors.auth',
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    'django.core.context_processors.static',
    "django.core.context_processors.tz",
    "django.contrib.messages.context_processors.messages",
)

REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser',
    )
}

#CSRF_COOKIE_SECURE = True

LOGIN_REDIRECT_URL = '/'

LOGIN_URL = 'django.contrib.auth.views.login'

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'catalog',
    'madmin',
    'authvb',
    'rest_framework',
    'customauth',
    'sorl.thumbnail',

)

MIDDLEWARE_CLASSES = (
    'middleware.MultiSiteMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    #'django.middleware.csrf.CsrfViewMiddleware'
    'catalog.disable.DisableCSRF',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'authvb.models.SubdomainMiddleware',
)

ROOT_URLCONF = 'vb.urls'

WSGI_APPLICATION = 'vb.wsgi.application'


LOGIN_REDIRECT_URL = '/profile'

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'vb',
        'USER': 'anton',
        'PASSWORD': 'password'
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'ru'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'

MEDIA_URL = '/media/'

STATIC_ROOT = '/home/anton/projects/vitrina/vb/static'



MEDIA_ROOT= os.path.join(BASE_DIR,'media/')

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
#    'django.contrib.staticfiles.finders.DefaultStorageFinder',
)


STATICFILES_DIRS = (
   os.path.join(BASE_DIR,'static-assets/'),
)


SESSION_COOKIE_DOMAIN = ".localhost"

SESSION_COOKIE_NAME = "anycook"

TEMPLATE_DIRS = (
    'templates',
)

