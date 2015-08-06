# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0004_auto_20150429_0323'),
    ]

    operations = [
        migrations.CreateModel(
            name='Marketplace',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=150, verbose_name=b'\xd0\x9d\xd0\xb0\xd0\xb7\xd0\xb2\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbc\xd0\xb0\xd0\xb3\xd0\xb0\xd0\xb7\xd0\xb8\xd0\xbd\xd0\xb0')),
                ('description', models.CharField(max_length=555, verbose_name=b'\xd0\x9e\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd0\xbd\xd0\xb8\xd0\xb5 \xd0\xbc\xd0\xb0\xd0\xb3\xd0\xb0\xd0\xb7\xd0\xb8\xd0\xbd\xd0\xb0')),
                ('logo', models.ImageField(null=True, upload_to=b'/shopimagelogo', blank=True)),
                ('pub_date', models.DateField(auto_now_add=True)),
                ('slug', models.SlugField(max_length=150, blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='shop',
            name='marketplace',
            field=models.ForeignKey(blank=True, to='catalog.Marketplace', null=True),
        ),
    ]
