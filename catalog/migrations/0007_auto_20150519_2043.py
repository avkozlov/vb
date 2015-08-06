# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0001_initial'),
        ('catalog', '0006_auto_20150514_1847'),
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=250, verbose_name=b'\xd0\xa2\xd0\xb8\xd1\x82\xd0\xbb')),
                ('site', models.ForeignKey(to='sites.Site')),
            ],
        ),
        migrations.CreateModel(
            name='Seo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=250, verbose_name=b'\xd0\xa2\xd0\xb8\xd1\x82\xd0\xbb')),
                ('h1', models.CharField(max_length=200, verbose_name=b'\xd0\x97\xd0\xb0\xd0\xb3\xd0\xbe\xd0\xbb\xd0\xbe\xd0\xb2\xd0\xbe\xd0\xba')),
                ('seotext', models.TextField(max_length=3000, verbose_name=b'\xd0\xa1\xd0\xb5\xd0\xbe\xd1\x82\xd0\xb5\xd0\xba\xd1\x81\xd1\x82')),
                ('city', models.ForeignKey(verbose_name=b'\xd0\x93\xd0\xbe\xd1\x80\xd0\xbe\xd0\xb4', blank=True, to='catalog.City', null=True)),
                ('rubrica', models.ForeignKey(verbose_name=b'\xd0\xa0\xd1\x83\xd0\xb1\xd1\x80\xd0\xb8\xd0\xba\xd0\xb0', blank=True, to='catalog.Rubrica', null=True)),
            ],
        ),
        migrations.AlterModelManagers(
            name='coll',
            managers=[
            ],
        ),
        migrations.RemoveField(
            model_name='coll',
            name='site',
        ),
        migrations.AddField(
            model_name='coll',
            name='city',
            field=models.ForeignKey(verbose_name=b'\xd0\x93\xd0\xbe\xd1\x80\xd0\xbe\xd0\xb4', blank=True, to='catalog.City', null=True),
        ),
        migrations.AddField(
            model_name='shop',
            name='city',
            field=models.ManyToManyField(to='catalog.City', null=True, verbose_name=b'\xd0\x93\xd0\xbe\xd1\x80\xd0\xbe\xd0\xb4\xd0\xb0', blank=True),
        ),
    ]
