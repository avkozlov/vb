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
from PIL import Image
import mptt
from tinymce.models import HTMLField


STATUS = (
    (1, 'nonmoderated'),
    (2,'accepted'),
    (3, 'restricted'),
)

GENDER = (
    (1, 'male'),
    (2, 'female'),
    (3, 'childboy'),
    (4, 'childgirl'),
)




from mptt.models import MPTTModel
from mptt.fields import TreeForeignKey

class Rubrica(MPTTModel):

    title = models.CharField(max_length=150, verbose_name="Рубрика", blank=True, null=True)
    parent = TreeForeignKey('self', blank=True, null=True, related_name='children')
    slug = models.SlugField(max_length=150, blank=True, null=True)
    gender = models.IntegerField(choices=GENDER, default=1, null=True)
    h1 = models.CharField(max_length=150, verbose_name="h1", blank=True, null=True)

    def save(self, **kwargs):
        #super(Coll, self).save()

        if not self.slug:
            self.uid = Rubrica.objects.latest('pk').id + 1
            self.slug = dict(GENDER).get(self.gender) + "-" + translit.slugify(self.title)
        super(Rubrica, self).save(**kwargs)

    def get_absolute_url(self):
        return reverse('catalog', kwargs={'slug': self.slug})

    def __unicode__(self):

        return self.title

class City(models.Model):
    title = models.CharField(max_length=250, verbose_name="Титл")
    site = models.ForeignKey(Site)


    def __unicode__(self):

        return self.title

class Seo(models.Model):
    title = models.CharField(max_length=250, verbose_name="Титл")
    h1 = models.CharField(max_length=200, verbose_name="Заголовок")
    seotext = HTMLField()
    city = models.ForeignKey(City, verbose_name="Город", blank=True, null=True)
    rubrica = models.ForeignKey(Rubrica, verbose_name="Рубрика", blank=True, null=True)

    def __unicode__(self):

        return self.title


class Marketplace(models.Model):
    title = models.CharField(max_length=150, verbose_name="Название магазина")
    description = models.CharField(max_length=555, verbose_name="Описание магазина")
    picture = models.ImageField(upload_to="shopimagelogo", null=True, blank=True)
    pub_date = models.DateField(auto_now_add=True)
    slug = models.SlugField(max_length=150, blank=True)

    def save(self, *args, **kwargs):

        super(Marketplace, self).save()

        # self.thumb = get_thumbnail(self.picture,'98x98', crop='center', quality=99).url
        self.picture = get_thumbnail(self.picture,'250x200', crop='center', quality=99).url

        if not self.slug:
            self.slug = translit.slugify(self.title)

        super(Marketplace, self).save()

        if not self.picture:
            return

    def get_absolute_url(self):
        return reverse('marketplaces', kwargs={'slug': self.slug})

    def __unicode__(self):

        return self.title





class Shop(models.Model):

    title = models.CharField(max_length=150, verbose_name="Название магазина")
    description = models.CharField(max_length=555, verbose_name="Описание магазина")
    owner = models.ForeignKey(MyUser)
    logo = models.ImageField(upload_to="/shopimagelogo", null=True, blank=True)
    pub_date = models.DateField(auto_now_add=True)
    moderation = models.IntegerField(choices=STATUS, default=1)
    slug = models.SlugField(max_length=150, blank=True)
    city = models.ForeignKey(City, null=True, blank=True, verbose_name="Города")
    marketplace = models.ForeignKey(Marketplace, null=True, blank=True)
    #acc = models.ForeignKey(Account)

    def get_initial(self):
        return { 'owner': self.request.MyUser }


    def save(self, **kwargs):
        #super(Coll, self).save()

        if not self.slug:
            self.uid = Shop.objects.latest('pk').id + 1
            self.slug = translit.slugify(self.title) + "-" + str(self.uid)
        super(Shop, self).save(**kwargs)

    def get_absolute_url(self):
        return reverse('shop', kwargs={'slug': self.slug})

    def __unicode__(self):

        return self.title




class Coll(models.Model):

    title = models.CharField(max_length=150, verbose_name="Название коллекции")
    description = models.CharField(max_length=555, verbose_name="Описание коллекции")
    rubric = models.ForeignKey(Rubrica, blank=True, null=True)
    owner = models.ForeignKey(MyUser, blank=True, null=True)
    shop = models.ForeignKey(Shop)
    city = models.ForeignKey(City, blank=True, null=True, verbose_name="Город")
    objects = models.Manager()
    pub_date = models.DateField(auto_now_add=True)
    slug = models.SlugField(max_length=150, blank=True)
    moderation = models.IntegerField(choices=STATUS, default=1)

    def save(self, **kwargs):
        #super(Coll, self).save()

        if not self.slug:
            self.uid = Coll.objects.latest('pk').id + 1
            self.slug = translit.slugify(self.title) + "-" + str(self.uid)
        super(Coll, self).save(**kwargs)

    def get_absolute_url(self):
        return reverse('articles', kwargs={'slug': self.slug})

    def __unicode__(self):

        return self.title



class Size(models.Model):
    size = models.CharField(max_length=4, verbose_name="Размер")

    def __unicode__(self):
        return self.size


def get_image_path(obj, filename):
    path = ''.join(["pictures/",translit.slugify(filename) + '.jpeg'])
    return path

def get_thumb_path(obj, filename):
    path = ''.join(["pictures/",translit.slugify(filename) + 'thumb.jpeg'])
    return path

from django.shortcuts import get_object_or_404
from sorl.thumbnail import get_thumbnail


class Picture(models.Model):


    title = models.CharField(max_length=200, default="No", blank=True, null=True)
    filename = models.ImageField(upload_to=get_image_path)
    description = models.CharField(max_length=150, null=True, blank=True, verbose_name="Описание")
    collection = models.ForeignKey(Coll, verbose_name="Коллекция", null=True, blank=True, default=4)
    color = models.CharField(max_length=10, blank=True, null=True, verbose_name="Цвет")
    size = models.ManyToManyField(Size, verbose_name="Размер", blank=True)
    price = models.IntegerField(blank=True, null=True)
    moderation = models.IntegerField(choices=STATUS, default=1, null=True)
    slugi = models.CharField(max_length=100, blank=True, null=True)
    pub_date = models.DateField(auto_now_add=True, blank=True, null=True)
    medium = models.ImageField(upload_to="pictures", null=True)
    thumb = models.ImageField(upload_to="pictures", null=True)


    # def dispatch(self, *args, **kwargs):
    #     self.collection = get_object_or_404(Coll, slug__iexact=self.kwargs['slug'])
    #     return super(PhotoList, self).dispatch(*args, **kwargs)

    def save(self, *args, **kwargs):

        basewidth = 500

        self.collection = get_object_or_404(Coll, slug=self.slugi)

        super(Picture, self).save()

        self.thumb = get_thumbnail(self.filename,'98x98', crop='center', quality=99).url
        self.medium = get_thumbnail(self.filename,'230x270', crop='center', quality=99).url

        super(Picture, self).save()



        # super(Picture, self).save()
        if not self.filename:
            return



        image = Image.open(self.filename)
        #(width, height) = image.size
        wpercent = (basewidth/float(image.size[0]))
        hsize = int((float(image.size[1])*float(wpercent)))
        image = image.resize((basewidth, hsize), Image.ANTIALIAS)
        image.save(self.filename.path)



    # def save(self, *args, **kwargs):
    #     basewidth = 300
    #
    #     if not self.filename:
    #         return
    #
    #     super(Picture, self).save()
    #
    #     image = Image.open(self.filename)
    #     #(width, height) = image.size
    #     wpercent = (basewidth/float(image.size[0]))
    #     hsize = int((float(image.size[1])*float(wpercent)))
    #     image = image.resize((basewidth, hsize), Image.ANTIALIAS)
    #     image.save(self.filename.path)
    #


    def __unicode__(self):

        return self.title
