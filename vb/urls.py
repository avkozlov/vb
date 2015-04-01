from django.conf.urls import patterns, include, url
from django.contrib import admin
from madmin.views import ListColl
from catalog.views import PostsIndex, PostDetail, CreateColl, UpdateColl,\
    SnippetList, SnippetDetail, Snip, SnippetDetaily, PhotoDetail, PhotoList, ExampleView
from rest_framework.urlpatterns import format_suffix_patterns

from django.conf import settings
from django.conf.urls.static import static

from django.contrib.staticfiles.urls import staticfiles_urlpatterns





# urlpatterns = patterns('',
#     # Examples:
#     url(r'^$', PostsIndex.as_view(), name='home'),
#     url(r'^create/$', CreateColl.as_view(), name='create'),
#     url(r'^articles/(?P<slug>[-\w\d]+)/$', PostDetail.as_view(), name='articles'),
#     url(r'^update/(?P<slug>[-\w\d]+)/$', UpdateColl.as_view(), name='update'),
#     url(r'^login/$', 'django.contrib.auth.views.login'),
#      url(r'^logout/$', 'django.contrib.auth.views.logout'),
#     # url(r'^blog/', include('blog.urls')),
#
#
#
#
# )

#
#
urlpatterns = [
    url(r'^snippets/$', Snip.as_view()),
   # url(r'^snippets/(?P<pk>[0-9]+)/$', views.SnippetDetail.as_view()),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', PostsIndex.as_view(), name='home'),
    url(r'^snippets/(?P<pk>[0-9]+)/$', SnippetDetaily.as_view()),
    url(r'^pictures/$', PhotoList.as_view()),
    url(r'^Pictures/(?P<pk>[0-9]+)/$', PhotoDetail.as_view()),
    url(r'^articles/(?P<slug>[-\w\d]+)/$', PostDetail.as_view(), name='articles'),
    url(r'^login/$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout'),
    url(r'^articles/(?P<slug>[-\w\d]+)/$', PostDetail.as_view(), name='articles'),
    url(r'^profile/$', ListColl.as_view(), name = 'admin-colls'),
    url(r'^upload/$', 'catalog.views.home', name = 'upload'),
    url(r'^uploadpics/$', ExampleView.as_view(), name = 'uploadpics'),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns = format_suffix_patterns(urlpatterns)


