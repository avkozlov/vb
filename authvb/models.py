from django.db import models

# Create your models here.
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

class LoggedMixin(object):

    @method_decorator(login_required)
    def dispatch(self, *args, **kwargs):
        return super(LoggedMixin, self).dispatch(*args, **kwargs)


