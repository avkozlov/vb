from django.shortcuts import render
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from .models  import Coll
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.sites.models import Site
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from authvb.models import LoggedMixin
from django import forms


# Create your views here.

class CollForm(forms.ModelForm):
    class Meta(object):
        model = Coll
        #exclude = ('owner',)



def home(request):

    red = request.subdomain
    rk = request.domain
    lair = request.lair
    coll = Coll.objects.filter(site = get_current_site(request))
    sites = get_current_site(request)
    which = Site.objects.get_current()
    part = request.get_host()


    return render_to_response("home.html", locals(), context_instance=RequestContext(request))


class PostsIndex(ListView):
    model = Coll
    context_object_name = 'posts'
    template_name = 'home.html'

    def get_queryset(self):
        qs = Coll.objects.filter(site = get_current_site(self.request))

        return qs

class PostDetail(LoggedMixin, DetailView):

    model = Coll
    context_object_name = 'post1'
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super(PostDetail, self).get_context_data(**kwargs)
        context['article'] = Coll.objects.get(pk=self.object.pk)
        return context

class CreateColl(CreateView):
    form_class = CollForm
    template_name = 'create.html'
    success_url = '/success/'

    # def form_valid(self, form):
    #     Coll.objects.create(**form.cleaned_data)
    #     return redirect(self.get_success_url())


class UpdateColl(UpdateView):
    model = Coll
    template_name = 'update.html'
