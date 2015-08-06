# -*- coding: utf-8 -*-
from django.db import models
from sorl.thumbnail import get_thumbnail

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length=255, verbose_name="Статья")
    body = models.TextField()
    slug = models.SlugField(max_length=150, blank=True, null=True)
    h1 = models.CharField(max_length=150, verbose_name="h1", blank=True, null=True)
    SEO = models.TextField(max_length=2550, verbose_name="SEO", blank=True, null=True)
    pub_date = models.DateField(auto_now_add=True)
    picture = models.ImageField(upload_to="articles", null=True)
    thumb = models.ImageField(upload_to="articles", null=True, blank=True)
    medium = models.ImageField(upload_to="articles", null=True, blank=True)

    def save(self, *args, **kwargs):

        super(Article, self).save()

        self.thumb = get_thumbnail(self.picture,'98x98', crop='center', quality=99).url
        self.medium = get_thumbnail(self.picture,'250x200', crop='center', quality=99).url

        super(Article, self).save()

        if not self.picture:
            return


    def __unicode__(self):

        return self.title

