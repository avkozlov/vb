from django.db import models

# Create your models here.
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

class LoggedMixin(object):

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(LoggedMixin, self).dispatch(*args, **kwargs)


class SubdomainMiddleware:
    """ Make the subdomain publicly available to classes """

    def process_request(self, request):
        domain_parts = request.get_host().split('.')
        if (len(domain_parts) >= 2):
            subdomain = domain_parts[0]
            lair = 2
            if (subdomain.lower() == 'www'):
                subdomain = None
            domain = '.'.join(domain_parts[1:])
            lair = 3
        else:
            subdomain = None
            domain = request.get_host().split('.')
            lair = 1

        request.subdomain = subdomain
        request.domain = domain
        request.lair = lair
