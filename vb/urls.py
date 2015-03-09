from django.conf.urls import patterns, include, url
from django.contrib import admin
from madmin.views import ListColl


urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'catalog.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^login/$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout'),
    url(r'^profile/$', ListColl.as_view(), name = 'admin-colls'),

)
