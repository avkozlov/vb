# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from django.contrib.sites.models import Site
from django.contrib.sites.managers import CurrentSiteManager
from django.core.urlresolvers import reverse
from autoslug import AutoSlugField
from django.template.defaultfilters import slugify
from pytils import translit



# Create your models here.

class Rubrica(models.Model):

    title = models.CharField(max_length=150, verbose_name="Рубрика", blank=True, null=True)
    parent = models.ForeignKey('self', blank=True, null=True, related_name='children')

    def __unicode__(self):

        return self.title


# class Shop(models.Model):
#
#     title = models.CharField(max_length=150, verbose_name="Название магазина")
#     description = models.CharField(max_length=555, verbose_name="Описание магазина")
#     owner = models.ForeignKey(User)
#
#
#
#     def __unicode__(self):
#
#         return self.title



class Coll(models.Model):

    title = models.CharField(max_length=150, verbose_name="Название коллекции")
    description = models.CharField(max_length=555, verbose_name="Описание коллекции")
    rubric = models.ForeignKey(Rubrica, blank=True, null=True)
    owner = models.ForeignKey(User)
    site = models.ForeignKey(Site, blank=True, null=True)
    objects = models.Manager()
    on_site = CurrentSiteManager()
    pub_date = models.DateField(auto_now_add=True)
    slug = models.SlugField(max_length=150, blank=True)

    def save(self, **kwargs):
        super(Coll, self).save()
        if not self.slug:
            self.slug = translit.slugify(self.title) + "-" + str(self.id)
        super(Coll, self).save(**kwargs)

    def get_absolute_url(self):
        return reverse('articles', kwargs={'slug': self.slug})


    def __unicode__(self):

        return self.title


