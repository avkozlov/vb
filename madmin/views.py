from django.shortcuts import render


from authvb.models  import LoggedMixin
from django.views.generic import ListView

from catalog.models import Coll
# Create your views here.
class ListColl(LoggedMixin, ListView):

    model = Coll
    template_name = 'admin_coll_list.html'
    context_object_name = 'colls'

    def get_queryset(self):

        colls = Coll.objects.filter(owner=self.request.user)

        return colls




