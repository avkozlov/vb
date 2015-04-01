# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from django.contrib.sites.models import Site
from django.contrib.sites.managers import CurrentSiteManager
from django.core.urlresolvers import reverse
from autoslug import AutoSlugField
from django.template.defaultfilters import slugify
from pytils import translit
from customauth.models  import MyUser


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

class Account(models.Model):

    date_created = models.DateTimeField()
    bill = models.IntegerField()



class Coll(models.Model):

    title = models.CharField(max_length=150, verbose_name="Название коллекции")
    description = models.CharField(max_length=555, verbose_name="Описание коллекции")
    rubric = models.ForeignKey(Rubrica, blank=True, null=True)
    owner = models.ForeignKey(MyUser)
    site = models.ForeignKey(Site, blank=True, null=True)
    objects = models.Manager()
    on_site = CurrentSiteManager()
    pub_date = models.DateField(auto_now_add=True)
    slug = models.SlugField(max_length=150, blank=True)

    # def save(self, **kwargs):
    #     #super(Coll, self).save()
    #     self.uid = Coll.objects.latest('pk').id + 1
    #     if not self.slug:
    #         self.slug = translit.slugify(self.title) + "-" + str(self.uid)
    #     super(Coll, self).save(**kwargs)

    def get_absolute_url(self):
        return reverse('articles', kwargs={'slug': self.slug})


    def __unicode__(self):

        return self.title

import os

class Size(models.Model):
    size = models.CharField(max_length=4, verbose_name="Размер")

    def __unicode__(self):
        return self.size



STATUS = (
    (1, 'nonmoderated'),
    (2,'accepted'),
    (3, 'restricted'),
)

from PIL import Image

class Picture(models.Model):

    def get_image_path(self, filename):
        path = ''.join(["pictures/",translit.slugify(filename) + '.jpeg'])
        return path

    # def get_image_title():
    #     t = Coll.objects.get(pk=1).title
    #     return t


    title = models.CharField(max_length=200, default="No")
    filename = models.ImageField(upload_to=get_image_path)
    collection = models.ForeignKey(Coll, verbose_name="Коллекция", default=1)
    color = models.CharField(max_length=10, blank=True, null=True, verbose_name="Цвет")
    size = models.ManyToManyField(Size, verbose_name="Размер", blank=True)
    price = models.IntegerField(blank=True, null=True)
    moderation = models.IntegerField(choices=STATUS, default=1)

    def save(self, *args, **kwargs):
        size = (350, 300)

        if not self.filename:
            return

        super(Picture, self).save()

        image = Image.open(self.filename)
        (width, height) = image.size
        image = image.resize(size, Image.ANTIALIAS)
        image.save(self.filename.path)

    def __unicode__(self):

        return self.title
