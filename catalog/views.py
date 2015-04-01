from django.shortcuts import render
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from .models  import Coll, Picture
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


    return render_to_response("upload.html", locals(), context_instance=RequestContext(request))


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



from serializers import CollSerializer, PictureSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from apps.rest_api.viewsets import CreateModelViewSet, CreateListModelViewSet

class SnippetList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request, format=None):
        snippets = Coll.objects.all()
        serializer = CollSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CollSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SnippetDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Coll.objects.get(pk=pk)
        except Coll.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = CollSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = CollSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Generic ListViewAPI

from rest_framework import generics

class Snip(generics.ListCreateAPIView):
    queryset = Coll.objects.all()
    serializer_class = CollSerializer


class SnippetDetaily(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coll.objects.all()
    serializer_class = CollSerializer


from django.views.decorators.csrf import csrf_exempt



class PhotoList(generics.ListCreateAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super(PhotoList, self).dispatch(*args, **kwargs)



# class PhotoUploadListView(CreateListModelViewSet):
#     """
#     API endpoint for photo upload and listing
#     """
#     queryset = Picture.objects.all()
#     serializer_class = PictureSerializer
#
#
#
    # def post(self, request, *args, **kwargs):
    #     return self.create(request, *args, **kwargs)
#     def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)


class PhotoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer



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