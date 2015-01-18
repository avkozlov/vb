# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Rubrica(models.Model):

    title = models.CharField(max_length=150, verbose_name="Рубрика", blank=True, null=True)
    parent = models.ForeignKey('self', blank=True, null=True, related_name='children')

    def __unicode__(self):

        return self.title




class Coll(models.Model):

    title = models.CharField(max_length=150, verbose_name="Название коллекции")
    description = models.CharField(max_length=555, verbose_name="Описание коллекции")
    rubric = models.ForeignKey(Rubrica, blank=True, null=True)
    owner = models.ForeignKey(User, unique=True, blank=True, null=True)

    def __unicode__(self):

        return self.title


