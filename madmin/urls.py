from django.conf.urls import patterns, include, url

from .views import ListColl, UpdateColl, ListShop, UpdateShop, CreateShop,\
    CreateColl, ShopDetail, CreateColl1, CollDetail

from rest_framework import renderers


urlpatterns = (

    url(r'^colls/(?P<slug>[-\w\d]+)/$', CollDetail.as_view(), name='articles'),
    url(r'^colls/(?P<slug>[-\w\d]+)/update/$', UpdateColl.as_view(), name='update-coll'),
    url(r'^colls/$', ListColl.as_view(), name='listcoll'),
    url(r'^$', ListShop.as_view(), name = 'listshop'),
    url(r'^colls/(?P<slug>[-\w\d]+)/upload/$', 'catalog.views.home', name = 'upload'),
    url(r'^createshop/$', CreateShop.as_view(), name = 'createshop'),
    url(r'^shops/$', ListShop.as_view(), name = 'listshop'),
    url(r'^shops/(?P<slug>[-\w\d]+)/$', ShopDetail.as_view(), name='shop'),
    url(r'^shops/(?P<slug>[-\w\d]+)/update/$', UpdateShop.as_view(), name = 'updateshop'),
    url(r'^shops/(?P<slug>[-\w\d]+)/createcoll/$', CreateColl.as_view(), name = 'createcoll'),

)
