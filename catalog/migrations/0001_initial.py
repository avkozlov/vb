# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.db.models.manager
import mptt.fields
from django.conf import settings
import django.contrib.sites.managers
import catalog.models


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Coll',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xbe\xd0\xbb\xd0\xbb\xd0\xb5\xd0\xba\xd1\x86\xd0\xb8\xd0\xb8')),
                ('description', models.CharField(max_length=555, verbose_name=b'\xd0\x9e\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xba\xd0\xbe\xd0\xbb\xd0\xbb\xd0\xb5\xd0\xba\xd1\x86\xd0\xb8\xd0\xb8')),
                ('pub_date', models.DateField(auto_now_add=True)),
                ('slug', models.SlugField(max_length=150, blank=True)),
                ('moderation', models.IntegerField(default=1, choices=[(1, b'nonmoderated'), (2, b'accepted'), (3, b'restricted')])),
                ('owner', models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            managers=[
                (b'objects', django.db.models.manager.Manager()),
                (b'on_site', django.contrib.sites.managers.CurrentSiteManager()),
            ],
        ),
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(default=b'No', max_length=200)),
                ('filename', models.ImageField(upload_to=catalog.models.get_image_path)),
                ('color', models.CharField(max_length=10, null=True, verbose_name=b'\xd0\xa6\xd0\xb2\xd0\xb5\xd1\x82', blank=True)),
                ('price', models.IntegerField(null=True, blank=True)),
                ('moderation', models.IntegerField(default=1, choices=[(1, b'nonmoderated'), (2, b'accepted'), (3, b'restricted')])),
                ('slugi', models.CharField(max_length=100, null=True, blank=True)),
                ('pub_date', models.DateField(auto_now_add=True, null=True)),
                ('medium', models.ImageField(null=True, upload_to=b'pictures')),
                ('thumb', models.ImageField(null=True, upload_to=b'pictures')),
                ('collection', models.ForeignKey(verbose_name=b'\xd0\x9a\xd0\xbe\xd0\xbb\xd0\xbb\xd0\xb5\xd0\xba\xd1\x86\xd0\xb8\xd1\x8f', blank=True, to='catalog.Coll', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Rubrica',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150, null=True, verbose_name=b'\xd0\xa0\xd1\x83\xd0\xb1\xd1\x80\xd0\xb8\xd0\xba\xd0\xb0', blank=True)),
                ('slug', models.SlugField(max_length=150, null=True, blank=True)),
                ('gender', models.IntegerField(default=1, null=True, choices=[(1, b'male'), (2, b'female'), (3, b'childboy'), (4, b'childgirl')])),
                ('lft', models.PositiveIntegerField(editable=False, db_index=True)),
                ('rght', models.PositiveIntegerField(editable=False, db_index=True)),
                ('tree_id', models.PositiveIntegerField(editable=False, db_index=True)),
                ('level', models.PositiveIntegerField(editable=False, db_index=True)),
                ('parent', mptt.fields.TreeForeignKey(related_name='children', blank=True, to='catalog.Rubrica', null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbc\xd0\xb0\xd0\xb3\xd0\xb0\xd0\xb7\xd0\xb8\xd0\xbd\xd0\xb0')),
                ('description', models.CharField(max_length=555, verbose_name=b'\xd0\x9e\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbc\xd0\xb0\xd0\xb3\xd0\xb0\xd0\xb7\xd0\xb8\xd0\xbd\xd0\xb0')),
                ('logo', models.ImageField(null=True, upload_to=b'/shopimagelogo', blank=True)),
                ('pub_date', models.DateField(auto_now_add=True)),
                ('moderation', models.IntegerField(default=1, choices=[(1, b'nonmoderated'), (2, b'accepted'), (3, b'restricted')])),
                ('slug', models.SlugField(max_length=150, blank=True)),
                ('owner', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('size', models.CharField(max_length=4, verbose_name=b'\xd0\xa0\xd0\xb0\xd0\xb7\xd0\xbc\xd0\xb5\xd1\x80')),
            ],
        ),
        migrations.AddField(
            model_name='picture',
            name='size',
            field=models.ManyToManyField(to='catalog.Size', verbose_name=b'\xd0\xa0\xd0\xb0\xd0\xb7\xd0\xbc\xd0\xb5\xd1\x80', blank=True),
        ),
        migrations.AddField(
            model_name='coll',
            name='rubric',
            field=models.ForeignKey(blank=True, to='catalog.Rubrica', null=True),
        ),
        migrations.AddField(
            model_name='coll',
            name='shop',
            field=models.ForeignKey(to='catalog.Shop'),
        ),
        migrations.AddField(
            model_name='coll',
            name='site',
            field=models.ForeignKey(verbose_name=b'\xd0\x93\xd0\xbe\xd1\x80\xd0\xbe\xd0\xb4', blank=True, to='sites.Site', null=True),
        ),
    ]
