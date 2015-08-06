from rest_framework import generics
# Create your views here.
from .serializers import PictureSerializer
from catalog.models import Picture
from rest_framework.response import Response


from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework import viewsets
from rest_framework.decorators import detail_route
from django.shortcuts import get_object_or_404


class PicsAll(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer


class Pics(viewsets.ModelViewSet):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer
    renderer_classes = (TemplateHTMLRenderer,)
    template_name="profile/img.html"


    #
    # def list(self, request):
    #     queryset = Picture.objects.all()
    #     serializer = PictureSerializer(queryset, many=True)
    #     return Response(serializer.data)
    #
    #
    # def partial_update(self, request, pk, *args, **kwargs):
    #     queryset = Picture.objects.all()
    #     pic = get_object_or_404(queryset, pk=pk)
    #     serializer = PictureSerializer(pic, data=request.data, partial=True)
    #     return Response(serializer.data)
    #



from rest_framework.decorators import api_view
from rest_framework.reverse import reverse

@api_view(('GET',))
def api_root(request, format=None):
    return Response({
        'pics': reverse('pics-list', request=request, format=format)
    })


# class Pics(generics.ListCreateAPIView):
#     queryset = Picture.objects.all()
#     serializer_class = PictureSerializer
#     renderer_classes = (JSONRenderer, TemplateHTMLRenderer,)
#     template_name="profile/img.html"
#
#
#     def list(self, request):
#         # Note the use of `get_queryset()` instead of `self.queryset`
#         queryset = self.get_queryset()
#         serializer = PictureSerializer(queryset, many=True)
#         return Response(serializer.data)
#
#      def get(self, request, *args, **kwargs):
#         return self.list(request, *args, **kwargs)