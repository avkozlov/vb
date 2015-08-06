from django.shortcuts import render
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from .models  import Coll, Picture, Shop, Rubrica, Marketplace, City, Seo
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.sites.models import Site
from django.views.generic import ListView, DetailView, CreateView, UpdateView, TemplateView
from authvb.models import LoggedMixin
from django import forms


# Create your views here.

class CollForm(forms.ModelForm):
    class Meta(object):
        model = Coll
        exclude = ('owner',)



def home(request):

    red = request.subdomain
    rk = request.domain
    lair = request.lair
    coll = Coll.objects.filter(site = get_current_site(request))
    sites = get_current_site(request)
    which = Site.objects.get_current()
    part = request.get_host()


    return render_to_response("upload.html", locals(), context_instance=RequestContext(request))


def rubric(request):

    return render_to_response("rubric.html", locals(), context_instance=RequestContext(request))

def testmenu(request):
        return render_to_response("testmenu.html", {}, context_instance=RequestContext(request))


def category_page(request):
    #getting detail information about current object
    current_category = Rubrica.objects.get(id=4 )
    root_category_id = current_category.get_root().id
    #render
    return render_to_response("menu.html",
                          {
                              'nodes':Rubrica.objects.all(),
                              'current_category':current_category,
                              'root_category_id':root_category_id
                          },
                          context_instance=RequestContext(request))



class PicsRubric(TemplateView):
    model = Picture
    context_object_name = 'pics'
    template_name = 'rubric.html'


    def get_context_data(self, **kwargs):
        context = super(PicsRubric, self).get_context_data(**kwargs)
        context['rubric'] = get_object_or_404(Rubrica, slug__iexact=self.kwargs['slug'])

        return context

    def pics(self):
        itemstoreturn = {}
        itemstoreturn["rubric"] = get_object_or_404(Rubrica, slug__iexact=self.kwargs['slug'])
        itemstoreturn["current_category"] =  itemstoreturn["rubric"]
        itemstoreturn["family"] = itemstoreturn["rubric"].get_family()
        itemstoreturn["root_category_id"] =  itemstoreturn["rubric"].get_root().id
        itemstoreturn["nodes"] =  Rubrica.objects.all()

        itemstoreturn["h1"] = itemstoreturn["current_category"].h1
        itemstoreturn["seo"] = Seo.objects.get(rubrica = itemstoreturn["current_category"])
        if itemstoreturn["rubric"].get_descendants():
            itemstoreturn["rubric"] = itemstoreturn["rubric"].get_descendants()
        city = City.objects.get(site = get_current_site(self.request))
        #itemstoreturn["classes"] = Rubrica.objects.filter(pk=17).select_subclasses()
        cls = Coll.objects.filter(city = city, rubric = itemstoreturn["rubric"])
        itemstoreturn["pics2"] = Picture.objects.filter(collection = cls).order_by('-pub_date')
        return itemstoreturn




    def title(self):
        titles = {}
        #titles['h1'] = get_object_or_404(Rubrica, slug__iexact=self.kwargs['slug'])
        titles['h2'] = "regewrget"

        return titles

    def rubsmale(self):
        return Rubrica.objects.filter(gender = 1)

    def rubsfemale(self):
        return Rubrica.objects.filter(gender = 2)


class Markets(ListView):
    model = Marketplace
    context_object_name = 'markets'
    template_name = 'marketplaces.html'

    def shops(self):

        return Shop.objects.all()

class Market(DetailView):
    model = Marketplace
    context_object_name = 'markets'
    template_name = 'market.html'

    def get_shop(self):

        marketplace = get_object_or_404(Marketplace, slug__iexact=self.kwargs['slug'])

        return Shop.objects.filter(marketplace=marketplace)


def profile(request):
    return render_to_response("profile/dashboard.html", locals(), context_instance=RequestContext(request))

class PicsIndex(TemplateView):
    model = Picture
    context_object_name = 'pics'
    template_name = 'index.html'

    def pics(self):
        city = City.objects.get(site = get_current_site(self.request))
        cls = Coll.objects.filter(city = city)
        return Picture.objects.filter(collection = cls).order_by('-pub_date')[0:9]



class CollPicsDetail(DetailView):

    model = Coll
    context_object_name = 'pics'
    template_name = 'card1.html'


    # def get_context_data(self, **kwargs):
    #     context = super(CollPicsDetail, self).get_context_data(**kwargs)
    #     #context['colls'] = Coll.objects.get(pk=self.object.pk)
    #     return context
    def pics(self):
        itemstoreturn = {}
        itemstoreturn["collection"] = get_object_or_404(Coll, slug__iexact=self.kwargs['slug'])
        itemstoreturn["rubric"] = itemstoreturn["collection"].rubric
        itemstoreturn["pics"] = Picture.objects.filter(collection=self.object)
        itemstoreturn["current_category"] =  itemstoreturn["rubric"]
        itemstoreturn["root_category"] =  itemstoreturn["rubric"].get_root()
        itemstoreturn["nodes"] =  Rubrica.objects.all()
        itemstoreturn["ancestors"] = itemstoreturn["current_category"].get_ancestors()
        itemstoreturn["seo"] = Seo.objects.get(rubrica = itemstoreturn["current_category"])

        return itemstoreturn

    def get_context_data(self, **kwargs):
            context = super(CollPicsDetail, self).get_context_data(**kwargs)
            context['rubric'] = get_object_or_404(Coll, slug__iexact=self.kwargs['slug']).rubric

            return context



from serializers import CollSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response

# from apps.rest_api.viewsets import CreateModelViewSet, CreateListModelViewSet


from rest_framework import generics

class Snip(generics.ListCreateAPIView):
    queryset = Coll.objects.all()
    serializer_class = CollSerializer


class SnippetDetaily(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coll.objects.all()
    serializer_class = CollSerializer




from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponseRedirect

##########################################

from forms import CollForm, ShopForm
from django.shortcuts import get_object_or_404




from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from django.template.response import TemplateResponse




# class PictureUpdateView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Picture.objects.all()
#     serializer_class = PictureSerializer





# class CreatePictures(generics.CreateAPIView):
#     queryset = Picture.objects.all()
#     serializer_class = PictureSerializer
#     renderer_classes = (JSONRenderer, TemplateHTMLRenderer,)
#     template_name = "profile/img.html"
#
#
#     def get_queryset(self):
#
#         usere = self.request.user
#         title = self.response.title
#         response = self.response
#         return response


# class PhotoDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Picture.objects.all()
#     serializer_class =    PictureSerializer



from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    """
    A view that can accept POST requests with JSON content.
    """
    parser_classes = (JSONParser,)

    def post(self, request, format=None):
        return Response({'received data': request.data})