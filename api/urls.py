from django.conf.urls import patterns, include, url

from .views import Pics, PicsAll, api_root
from rest_framework import renderers

pics_all = PicsAll.as_view({
        'get': 'list',
})


pics_list = Pics.as_view({
    'get': 'list',
    'post': 'create'
})
pic_detail = Pics.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})
pic_highlight = Pics.as_view({
    'get': 'highlight'
}, renderer_classes=[renderers.StaticHTMLRenderer])



urlpatterns = (
    url(r'^$', api_root),
    url(r'^pics/$', pics_list, name='pics-list'),
    url(r'^picsall/$', pics_all, name='pics-all'),
    url(r'^pics/(?P<pk>[0-9]+)/$', pic_detail, name='pic-detail'),
    url(r'^pics/(?P<pk>[0-9]+)/highlight/$', pic_highlight, name='pic-highlight'),

)
