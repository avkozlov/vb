# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=255, verbose_name=b'\xd0\xa1\xd1\x82\xd0\xb0\xd1\x82\xd1\x8c\xd1\x8f')),
                ('body', models.TextField()),
                ('slug', models.SlugField(max_length=150, null=True, blank=True)),
                ('h1', models.CharField(max_length=150, null=True, verbose_name=b'h1', blank=True)),
                ('SEO', models.TextField(max_length=2550, null=True, verbose_name=b'SEO', blank=True)),
                ('pub_date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
