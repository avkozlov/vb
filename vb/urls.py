from django.conf.urls import patterns, include, url
from django.contrib import admin


from catalog.views import PicsIndex, Snip, SnippetDetaily, ExampleView, PicsRubric,\
    CollPicsDetail, Markets, Market
from articles.views import Articles, Article

from rest_framework.urlpatterns import format_suffix_patterns


from django.conf import settings
from django.conf.urls.static import static
from customauth.admin import CreateUser

urlpatterns = [
    url(r'^snippets/$', Snip.as_view()),
    # url(r'^snippets/(?P<pk>[0-9]+)/$', views.SnippetDetail.as_view()),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('api.urls')),
    url(r'^profile/', include('madmin.urls')),

    url(r'^$', PicsIndex.as_view(), name='home'),
    url(r'^rubric/$', PicsRubric.as_view(), name='rubric'),


    url(r'^catalog/(?P<slug>[-\w\d]+)/$', PicsRubric.as_view(), name='catalog'),
    url(r'^tovar/(?P<slug>[-\w\d]+)/$', CollPicsDetail.as_view(), name='tovar'),


    url(r'^login/$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout'),

    url(r'^menu/$', 'catalog.views.category_page', name = 'test'),
    url(r'^testmenu/$', 'catalog.views.testmenu', name = 'testmenu'),
    url(r'^upload/$', 'catalog.views.home', name = 'upload'),
    url(r'^uploadpics/$', ExampleView.as_view(), name = 'uploadpics'),
    url(r'^createuser/$', CreateUser.as_view(), name = 'createuser'),
    #Articles

    url(r'^articles/', include('articles.urls')),

    #Marketplaces
    url(r'^marketplaces/$', Markets.as_view(), name = 'Markets'),
    url(r'^marketplaces/(?P<slug>[-\w\d]+)/$', Market.as_view(), name='Market'),

    #tinyMCE
     url(r'^tinymce/', include('tinymce.urls')),


]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns = format_suffix_patterns(urlpatterns)


