

from django.conf.urls import patterns, include, url

from .views import Articles, Article

from rest_framework import renderers


urlpatterns = (

    url(r'^$', Articles.as_view(), name = 'Articles'),
    url(r'^(?P<slug>[-\w\d]+)/$', Article.as_view(), name='Article'),

)
