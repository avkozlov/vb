
from django import http
from django.conf import settings
from django.contrib.sites.models import Site

class MultiSiteMiddleware(object):
    def process_request(self, request):

        host = request.get_host()
        try:
            site = Site.objects.get(domain = host)
            settings.SITE_ID = site.id
            Site.objects.clear_cache()
            return
        except Site.DoesNotExist:
            return http.HttpResponseRedirect('www.yandex.ru')
