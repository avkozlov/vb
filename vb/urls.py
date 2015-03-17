from django.conf.urls import patterns, include, url
from django.contrib import admin
from madmin.views import ListColl
from catalog.views import PostsIndex, PostDetail, CreateColl, UpdateColl



urlpatterns = patterns('',
    # Examples:
    url(r'^$', PostsIndex.as_view(), name='home'),
    url(r'^create/$', CreateColl.as_view(), name='create'),
    url(r'^articles/(?P<slug>[-\w\d]+)/$', PostDetail.as_view(), name='articles'),
    url(r'^update/(?P<slug>[-\w\d]+)/$', UpdateColl.as_view(), name='update'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout'),
    url(r'^profile/$', ListColl.as_view(), name = 'admin-colls'),

)
