from django.shortcuts import render

from catalog.forms import CollForm, ShopForm, CollForm1
from authvb.models  import LoggedMixin
from django.views.generic import ListView, UpdateView, CreateView, DetailView
from catalog.models import Coll, Shop, Picture
from django.http import HttpResponseRedirect
from authvb.models import LoggedMixin
from django.shortcuts import get_object_or_404


# Create your views here.
class ListColl(LoggedMixin, ListView):

    model = Coll
    template_name = 'profile/admin_coll_list.html'
    context_object_name = 'colls'

    def get_queryset(self):

        colls = Coll.objects.filter(owner=self.request.user)


        return colls



class UpdateColl(LoggedMixin, UpdateView):
    form_class = CollForm
    model = Coll
    template_name = 'profile/coll.html'
    success_url = "/profile/colls"




class ListShop(LoggedMixin, ListView):

    model = Shop
    template_name = 'profile/admin_shop_list.html'
    context_object_name = 'shops'

    def get_queryset(self):

        shops = Shop.objects.filter(owner=self.request.user)

        return shops


class UpdateShop(LoggedMixin, UpdateView):
    form_class = ShopForm
    model = Shop
    template_name = 'update.html'


    success_url = "/profile/"


class CreateColl(CreateView):
    form_class = CollForm
    template_name = "profile/create.html"


    def dispatch(self, *args, **kwargs):
        """Ensure the Shop exists before creating a new Product."""
        self.shop = get_object_or_404(Shop, slug__iexact=self.kwargs['slug'])
        return super(CreateColl, self).dispatch(*args, **kwargs)

    # def get_context_data(self, **kwargs):
    #         """Add current shop to the context, so we can show it on the page."""
    #         context = super(CreateColl, self).get_context_data(**kwargs)
    #         context['shop'] = self.shop
    #         return context

    def form_valid(self, form):

        instance = form.save(commit=False)
        instance.owner = self.request.user
        instance.shop = self.shop
        instance.save()
        return HttpResponseRedirect('/profile/')

class CreateColl1(CreateView):
    form_class = CollForm1
    template_name = "profile/create.html"


    def dispatch(self, *args, **kwargs):
        """Ensure the Shop exists before creating a new Product."""
        #self.shop = get_object_or_404(Shop, slug__iexact=self.kwargs['slug'])
        return super(CreateColl1, self).dispatch(*args, **kwargs)

    # def get_context_data(self, **kwargs):
    #         """Add current shop to the context, so we can show it on the page."""
    #         context = super(CreateColl, self).get_context_data(**kwargs)
    #         context['shop'] = self.shop
    #         return context

    def form_valid(self, form):

        instance = form.save(commit=False)
        instance.owner = self.request.user
        #instance.shop = self.shop
        instance.save()
        return HttpResponseRedirect('/profile/')

class CollDetail(DetailView):

    model = Coll
    context_object_name = 'coll'
    template_name = 'profile/coll.html'

    def get_context_data(self, **kwargs):
        context = super(CollDetail, self).get_context_data(**kwargs)
        #context['colls'] = Coll.objects.get(pk=self.object.pk)
        context['pics'] = Picture.objects.filter(collection=self.object)
        return context





class CreateShop(CreateView):
    form_class = ShopForm
    template_name = "profile/create.html"



    def form_valid(self, form):

        instance = form.save(commit=False)
        instance.owner = self.request.user
        instance.save()

        return HttpResponseRedirect('/profile/shops')

class ShopDetail(LoggedMixin, DetailView):

    model = Shop
    context_object_name = 'post1'
    template_name = 'profile/shop.html'


    def get_context_data(self, **kwargs):
        context = super(ShopDetail, self).get_context_data(**kwargs)
        #context['shop'] = Shop.objects.get(pk=self.object.pk)
        context['colls'] = Coll.objects.filter(shop=self.object.pk)
        return context
